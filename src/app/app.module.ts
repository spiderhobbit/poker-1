import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './interceptors/authInterceptor';
import {UserSettingsComponent} from './components/user-settings/user-settings.component';
import {HomeComponent} from './components/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {RegisterComponent} from './components/register/register.component';
import {GameRoomComponent} from './components/game-room/game-room.component';
import {PlayerComponent} from './components/player/player.component';
import {GameTableComponent} from './components/game-table/game-table.component';
import {CardComponent} from './components/card/card.component';
import {ActionbarComponent} from './components/actionbar/actionbar.component';
import {ChatComponent} from './components/chat/chat.component';
import {RoomsOverviewComponent} from './components/rooms-overview/rooms-overview.component';
import {AuthServiceConfig, FacebookLoginProvider, SocialLoginModule} from 'angularx-social-login';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslatePipe} from './translate.pipe';
import {FriendsComponent} from './components/friends/friends.component';
import {SearchComponent} from './components/search/search.component';
import {UserAccountComponent} from './components/user-account/user-account.component';
import {GameRoomEditComponent} from './components/game-room-edit/game-room-edit.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {RankingsComponent} from './components/rankings/rankings.component';
import {MatSnackBarModule, MatTableModule, MatProgressBarModule} from '@angular/material';
import {NotifierModule} from 'angular-notifier';
import {customNotifierOptions} from './notifierOptions';
import {NotificationComponent} from './components/notification/notification.component';
import {RoomCardComponent} from './components/room-card/room-card.component';
import {NgCircleProgressModule} from 'ng-circle-progress';
import {GlobalMessageComponent} from './components/global-message/global-message.component';
import {PlayerCardComponent} from './components/player-card/player-card.component';
import {GameInvitationComponent} from './components/game-invitation/game-invitation.component';
import {ReplayComponent} from './components/replay/replay.component';
import {TranslateService} from './services/other/translate.service';

const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('483584635507231')
  }
]);

export function provideConfig() {
  return config;
}

export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => {
    const lang = localStorage.getItem('lang');
    if (lang === null) {
      service.use('en');
    } else {
      service.use(lang);
    }
  };
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserSettingsComponent,
    HomeComponent,
    RegisterComponent,
    GameRoomComponent,
    PlayerComponent,
    GameTableComponent,
    CardComponent,
    ActionbarComponent,
    ChatComponent,
    RoomsOverviewComponent,
    TranslatePipe,
    FriendsComponent,
    SearchComponent,
    UserAccountComponent,
    GameRoomEditComponent,
    RankingsComponent,
    NotificationComponent,
    RoomCardComponent,
    GlobalMessageComponent,
    PlayerCardComponent,
    ReplayComponent,
    GameInvitationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatProgressBarModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    SocialLoginModule,
    AngularFontAwesomeModule,
    MatTableModule,
    MatSnackBarModule,
    NotifierModule.withConfig(customNotifierOptions),
    MatProgressBarModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#4577c0',
      innerStrokeColor: '#3d8ee5',
      animation: false,
      responsive: true,
      showTitle: true,
      titleFontSize: '60',
      showSubtitle: false,
      showUnits: false,
      titleColor: 'white'
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [TranslateService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
