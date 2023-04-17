import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlameserviceService } from '../flameservice.service';

@Component({
  selector: 'app-flame-page',
  templateUrl: './flame-page.component.html',
  styleUrls: ['./flame-page.component.css'],
})
export class FlamePageComponent implements OnInit {
  result!: string;
  siblings = 'sibilings';
  love = 'love';
  friends = 'friends';
  affection = 'affection';
  enemy = 'enemy';
  marriage = 'marriage';
  sound = new Audio('../../assets/Happy-Birthday.mp3');
  flag = true;

  constructor(private service: FlameserviceService) {}
  ngOnInit(): void {
    this.play();
    this.flag = false;
  }

  onSubmit(f: any) {
    console.log(f.partner1 + ' ' + f.partner2);

    this.service.calculate(f.partner1, f.partner2).subscribe((res) => {
      this.result = res;
      console.log(res);
      console.log(this.result);
    });
  }

  play() {
    if (this.flag == true) {
      this.sound.play();
      this.sound.volume = 0.05;
      this.sound.loop = true;
      this.flag = false;
    } else {
      this.sound.pause();
      this.flag = true;
    }
  }
}
