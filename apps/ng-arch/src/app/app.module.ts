import { GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import {
	TranslateLoader,
	TranslateModule,
	TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http);
}

@NgModule({
	bootstrap: [AppComponent],
	declarations: [AppComponent],
	imports: [
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		EffectsModule.forRoot([]),
		HttpClientModule,
		SocialLoginModule,
		StoreModule.forRoot({
			router: routerReducer,
		}),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: environment.production,
		}),
		StoreRouterConnectingModule.forRoot(),
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient],
			},
		}),
	],
	providers: [
		{
			provide: 'SocialAuthServiceConfig',
			useValue: {
				autoLogin: true, //keeps the user signed in
				providers: [
					{
						id: GoogleLoginProvider.PROVIDER_ID,
						provider: new GoogleLoginProvider(
							'128671885226-0rj1pjhkddk11pigup5jpblqp036jiuj.apps.googleusercontent.com'
						),
					},
				],
			},
		},
	],
})
export class AppModule {
	constructor(private translateService: TranslateService) {
		this.translateService.setDefaultLang('en');
		this.translateService.use(this.translateService.getBrowserLang());
	}
}
