import {Injectable} from "@angular/core";
import {ToastController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastController: ToastController) {
  }

  async successMessage(message: string, extraMessage?: string) {
    const toast = await this.toastController.create({
      message: message + ' ' + (extraMessage ? extraMessage : ''),
      duration: 3000,
      position: 'top',
      color: 'success',
      translucent: true,
      mode: 'md',
      animated: true,
    });
    await toast.present();
  }

  async errorMessage(message: string, extraMessage?: string) {
    const toast = await this.toastController.create({
      message: message + ' ' + (extraMessage ? extraMessage : ''),
      duration: 3000,
      position: 'top',
      color: "danger"
    });
    await toast.present();
  }
}
