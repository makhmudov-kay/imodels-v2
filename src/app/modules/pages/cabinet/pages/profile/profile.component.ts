import { Component, OnInit, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CabinetService } from '../../services/cabinet.service';
import { UserDetail } from '../../../auth/model/user.model';
import { Observable, map } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: true,
  imports: [TranslateModule, NgIf, AsyncPipe]
})
export class ProfileComponent implements OnInit {
  /**
   *
   */
  $userDetail = inject(CabinetService);

  /**
   *
   */
  userDetail$!: Observable<UserDetail>;

  /**
   *
   */
  ngOnInit(): void {
    this.getUserDetail();
  }

  /**
   * 
   */
  private getUserDetail() {
    this.userDetail$ = this.$userDetail
      .getUserInfo()
      .pipe(map((result) => result));
  }
}
