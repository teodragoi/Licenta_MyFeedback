import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'shared-avatar',
	templateUrl: './avatar.component.html',
	styleUrls: ['./avatar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
	@Input() public imageSrc: string | undefined | null;
	@Input() public name: string | undefined | null;

	public get nameInitials(): string | undefined {
		return this.name
			?.split(' ')
			.map((name) => name.charAt(0))
			.slice(0, 2)
			.join('')
			.toUpperCase();
	}
}
