import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Society } from 'src/app/models/society';
import { BuurtschapService } from 'src/app/services/buurtschap.service';
import { CorsoService } from 'src/app/services/corso.service';
import { LoadingController } from '@ionic/angular';
import { SocietyService } from 'src/app/services/society.service';
import { ActivatedRoute } from '@angular/router';
import { Score } from 'src/app/models/score';

@Component({
  selector: 'app-society-detail',
  templateUrl: './society-detail.page.html',
  styleUrls: ['./society-detail.page.scss'],
})
export class SocietyDetailPage implements OnInit {
  society: Society;
  societyId: any;
  isCorso: any;
  memberStatus: number = 0;
  scores: Score[];

  constructor
  (
    private societyService: SocietyService,
    public loadingController: LoadingController,
    private route : ActivatedRoute
    ) 
  { 
    this.societyId = this.route.snapshot.paramMap.get('id');
    this.isCorso = this.route.snapshot.paramMap.get('corso');
  }

  ngOnInit() {
    this.getAccount();
  }

  async getAccount(): Promise<void> {
    const loading = await this.loadingController.create({
      message: "Please wait...",
    });
    await loading.present();
    this.societyService.getAccountPageInfo(this.isCorso, this.societyId)
      .subscribe(society => this.society = society);

      this.scores = [
        new Score("wagen naam 1", 1, 20, 625, 2011), 
        new Score("wagen naam 2", 16, 20, 422, 2010), 
        new Score("wagen naam 3", 20, 20, 386, 2009), 
        new Score("wagen naam 4", 3, 20, 528, 2008), 
        new Score("wagen naam 5", 5, 20, 524, 2007), 
        new Score("wagen naam 6", 2, 20, 544, 2006), 
        new Score("wagen naam 7", 10, 20, 367, 2006), 
        new Score("Wagen met naam 8", 10, 19, 380, 2006),
        new Score("Lab-13-fase-22-exp-humanisatie-dahlia", 18, 18, 380, 2006)];
    await loading.dismiss();
  }

  follow() : void{
    console.log("follow");
    this.changeMember(2);
  }

  unfollow() : void{
    console.log("unfollow");
    this.changeMember(1);
  }

  member() : void{
    console.log("member");
    this.changeMember(3);
  }

  unmember() : void{
    console.log("unmember");
    this.changeMember(2);
  }

  changeMember(memberStatus: number) : void{
    console.log("follow");
    this.societyService.changeMemberStatus(this.societyId, memberStatus).subscribe(status => this.memberStatus = status.member);
    this.memberStatus = memberStatus;
  }
}
