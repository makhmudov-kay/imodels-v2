import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CartComponent } from './components/cart/cart.component';
import { LanguageComponent } from './components/language/language.component';
import { SvgUserComponent } from 'src/app/shared/svg/svg-user/svg-user.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-actions-menu',
  templateUrl: './actions-menu.component.html',
  styleUrls: ['./actions-menu.component.css'],
  standalone: true,
  imports: [CartComponent, LanguageComponent, SvgUserComponent, NzIconModule, NzDrawerModule, MenuComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionsMenuComponent {
  visibleDrawerMenu = false

  cd = inject(ChangeDetectorRef)

  openDrawerMenu() {
    this.visibleDrawerMenu = true
    this.cd.markForCheck()
  }

  closeDrawerMenu() {
    this.visibleDrawerMenu = false
    this.cd.markForCheck()
  }
}
