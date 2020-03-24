import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  private articles;
  constructor(private apiService: ApiService) {
  }


  ngOnInit() {
  }

  ionViewDidEnter() {

    this.apiService.getNews().subscribe((data) => {
      console.log(data);
      // @ts-ignore
      this.articles = data.articles;
    });
  }

}
