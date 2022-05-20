import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscriber } from 'rxjs';
import { LoadingService } from '../service/loading.service';

import { ContentService, IWordCount } from './content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit, OnDestroy {
  firstControl = new FormControl('', [
    Validators.minLength(5),
    Validators.maxLength(10),
  ]);
  secondControl = new FormControl();
  form: FormGroup;
  wordCount: IWordCount[] = [];
  subscritions = new Subscriber();
  constructor(
    fb: FormBuilder,
    private api: ContentService,
    public loading: LoadingService
  ) {
    this.form = fb.group({
      firstControl: this.firstControl,
    });
  }
  ngOnDestroy(): void {
    this.subscritions.unsubscribe();
  }

  ngOnInit(): void {}

  submit() {
    const uri = this.secondControl.value;
    const mth = this.api.get(uri);

    const sub = this.loading
      .isCompleted(mth)
      .subscribe((result: IWordCount[]) => {
        this.wordCount = result;
      });

    this.subscritions.add(sub);
  }
}
