import { Component, OnInit } from '@angular/core';
import { TextService } from '../text.service';
import { Text } from '../text';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
})
export class TextComponent implements OnInit {
  text: Text;
  id: string;
  subscription: Subscription;

  constructor(
    private textService: TextService,
    private route: ActivatedRoute,
    private auth: AuthService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('id: ' + this.id);
    if (this.id) {
      this.subscription = this.textService
        .getText(this.id)
        .subscribe(
          (text) => (
            (this.text = text),
            this.titleService.setTitle(text.title + ' | ' + text.author)
          )
        );
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.text = new Text();
  }
}
