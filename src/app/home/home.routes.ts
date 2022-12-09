import {ListTicketsComponent} from "./list-tickets/list-tickets.component";

export const
  HOME_ROUTES = [
    {
      component: ListTicketsComponent,
      path: 'list-tickets'
    },
    {
      redirectTo: 'list-tickets',
      path: '**'
    },
  ];
