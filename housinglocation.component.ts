import { Component, inject } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-housinglocation',
  templateUrl: './housinglocation.component.html',
  styleUrls: ['./housinglocation.component.css']
})
export class HousinglocationComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  userserve = inject(UserserviceService )

  user: User|undefined;
  constructor() {
    const userid = Number(this.route.snapshot.params['id']);
    this.user = this.userserve.getuserbyid(userid);
  }


}
