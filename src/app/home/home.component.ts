import { Component, OnInit } from '@angular/core';
import { JsonData } from 'src/data';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private dataService: DataServiceService) {}
  articleJson2?: Array<JsonData>;
  ngOnInit(): void {
    this.dataService
      .getArticlelistApi()
      .subscribe((data: JsonData[]) => (this.articleJson2 = data));
  }

  articleJson: Array<JsonData> = this.dataService.getArticleList();

  tagList: Array<string> = this.dataService.getTagList();
}
