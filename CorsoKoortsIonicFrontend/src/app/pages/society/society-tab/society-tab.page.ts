import { Component, OnInit } from '@angular/core';
import { Article } from '../../../models/article';
import { ArticleService } from '../../../services/article.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-society-tab',
  templateUrl: './society-tab.page.html',
  styleUrls: ['./society-tab.page.scss'],
})
export class SocietyTabPage implements OnInit {

  private articles : Article[];
  private tabName : String;
  private societyId : String;
  private tabId : String;

  constructor
  (
    private articleService: ArticleService,
    public loadingController: LoadingController,
    private route: ActivatedRoute
    ) 
  { 
    this.societyId = this.route.snapshot.paramMap.get('id');
    this.tabId = this.route.snapshot.paramMap.get('tabId');
    this.tabName = "NAampje!" + this.societyId;
  }

  ngOnInit() {
    this.getArticles();
  }

  async getArticles(): Promise<void> {
    const loading = await this.loadingController.create({
      message: "Please wait...",
    });
    await loading.present();
    this.articleService.getObjects(this.societyId, this.tabId)
      .subscribe(objects => this.articles = objects);
    await loading.dismiss();
  }
}
