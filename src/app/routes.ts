import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { MemberListComponent } from './member-list/member-list.component';
import { AuthGuard } from './_guards/auth.guard';
import { AboutComponent } from './about/about.component';

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},

    // All paths inside here are protected using the auth.guard.ts
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'members', component: MemberListComponent},
            {path: 'messages', component: MessagesComponent},
            {path: 'lists', component: ListsComponent},
        ]
    },

    {path: 'about', component: AboutComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
