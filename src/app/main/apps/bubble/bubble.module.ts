import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CoreCommonModule } from '@core/common.module';
import { CoreSidebarModule } from '@core/components';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { BubbleComponent } from 'app/main/apps/bubble/bubble.component';
import { BubbleService } from 'app/main/apps/bubble/bubble.service';

// routing
const routes: Routes = [
  {
    path: 'buble',
    component: BubbleComponent,
    resolve: {
      data: BubbleService
    }
  }
];

@NgModule({
  declarations: [BubbleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    CoreCommonModule,
    CoreSidebarModule,
    ContentHeaderModule,
    CardSnippetModule,
    FormsModule
  ],
  providers: [BubbleService]
})
export class BubbleModule { }
