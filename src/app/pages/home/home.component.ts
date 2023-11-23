import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  developers = [
    {
      name: 'Willy David Valentin Ricaldi',
      photo: 'https://lh3.googleusercontent.com/a/ACg8ocK7K01cqCU5-XF5AV1j5tbewjHQMdmfa_r-kHbbIRcKAE4=s288-c-no',
      email: 'U20201C037',
    },

    {
      name: 'Clara Angie Valverde Salazar',
      photo: 'https://media-lim1-1.cdn.whatsapp.net/v/t61.24694-24/394179521_1001200474445669_487415513666496466_n.jpg?ccb=11-4&oh=01_AdTTjKnaY3q0ak3hIw0nOo3akw8a9Dc7fDYeNmSF-StOGg&oe=656A325D&_nc_sid=e6ed6c&_nc_cat=104',
      email: 'U20201B940',
    },

    {
      name: 'Julio Ernesto Asillo Mendoza',
      photo: 'https://media-lim1-1.cdn.whsatsapp.net/v/t61.24694-24/328134807_667389938828868_2498182620187994318_n.jpg?ccb=11-4&oh=01_AdRqn7lO1j4iU6rGN7M9pOTsagzoGDS6m5fz47o3hhcAbg&oe=656A82E2&_nc_sid=e6ed6c&_nc_cat=111',
      email: 'U20201B482',
    },

    {
      name: 'Leydi Yaquelin Mamani Aro',
      photo: 'https://i.ibb.co/2qsRRwX/Whats-App-Image-2023-11-23-at-6-27-20-AM.jpg',
      email: 'U20201B745',
    },

    {
      name: 'Giancarlo André Román Zamora',
      photo: '',
      email: 'U202010572',
    },

    {
      name: 'Lennin Daniel Huaman Huaranga',
      photo: 'https://media-lim1-1.cdn.whatsapdp.net/v/t61.24694-24/394170955_1340399423253177_2785711713459280749_n.jpg?ccb=11-4&oh=01_AdRMPkHAYPy10wcB33Q6uanpDe5Bmw0mktlmbaRJWTqTTw&oe=656A53C1&_nc_sid=e6ed6c&_nc_cat=101',
      email: 'U20201B975',
    },


  ];
}
