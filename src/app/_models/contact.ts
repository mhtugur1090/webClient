import { from } from 'rxjs';
import { Phone } from './phone';
import{Address} from './address'

export class Contact {
  id: number = 0;
  name: string = '';
  email: string = '';
  instagram: string = '';
  facebook: boolean = true;
  twitter: string = '';

  phones?: Phone[];
  addresses?: Address[];
}
