import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

export interface DataInformation {
  img: string;
  imageList: ImageList[];
  title: string;
  text: string;
  list: string[];
}

export interface ImageList {
  title: string;
  img: string;
}

@Component({
  selector: 'app-apex-pro',
  templateUrl: './apex-pro.component.html',
  styleUrls: ['./apex-pro.component.css'],
  standalone: true,
  imports: [TranslateModule, NgFor, NgClass]
})
export class ApexProComponent implements OnInit {
  dataInformations: DataInformation[] = [
    {
      img: './assets/image/apex-info-1.jpg',
      imageList: [
        {
          title: 'dataInformations.imageList.title',
          img: './assets/image/apex-pro-info-1.jpg',
        },
        {
          title: 'dataInformations.imageList.title2',
          img: './assets/image/apex-pro-info-2.jpg',
        },
        {
          title: 'dataInformations.imageList.title3',
          img: './assets/image/apex-pro-info-3.jpg',
        },
      ],
      title: 'dataInformations.title',
      text: 'dataInformations.text',
      list: [
        'dataInformations.list1',
        'dataInformations.list2',
        'dataInformations.list3',
        'dataInformations.list4',
      ],
    },
    {
      img: './assets/image/apex-info-2.jpg',
      imageList: [
        {
          title: 'dataInformations.imageList.title4',
          img: './assets/image/apex-pro-info-4.jpg',
        },
        {
          title: 'dataInformations.imageList.title5',
          img: './assets/image/apex-pro-info-5.jpg',
        },
        {
          title: 'dataInformations.imageList.title6',
          img: './assets/image/apex-pro-info-6.jpg',
        },
      ],
      title: 'dataInformations.title2',
      text: 'dataInformations.text2',
      list: [
        'dataInformations.list5',
        'dataInformations.list6',
        'dataInformations.list7',
        'dataInformations.list8',
        'dataInformations.list9',
      ],
    },
    {
      img: './assets/image/apex-info-3.jpg',
      imageList: [
        {
          title: 'dataInformations.imageList.title7',
          img: './assets/image/apex-pro-info-7.jpg',
        },
        {
          title: 'dataInformations.imageList.title8',
          img: './assets/image/apex-pro-info-8.jpg',
        },
        {
          title: 'dataInformations.imageList.title9',
          img: './assets/image/apex-pro-info-9.jpg',
        },
      ],
      title: 'dataInformations.title3',
      text: 'dataInformations.text3',
      list: [
        'dataInformations.list10',
        'dataInformations.list11',
        'dataInformations.list12',
      ],
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
