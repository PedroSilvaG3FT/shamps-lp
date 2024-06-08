import { Component, inject } from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoadingStore } from '../../../../store/loading.store';
import { AnimateDirective } from '../../../@core/directives/animate.directive';
import { SuggestionService } from '../../../@shared/services/suggestion.service';
import { ISuggestionDB } from '../../../@shared/interfaces/suggestion.interface';
import { FormGeneratorService } from '../../../@core/components/_form-generator/form-generator.service';
import { AppSocialMediaComponent } from '../../../@core/components/app-social-media/app-social-media.component';
import { LandingPageSectionTitleComponent } from '../landing-page-section-title/landing-page-section-title.component';
import { AppFormGeneratorComponent } from '../../../@core/components/_form-generator/app-form-generator/app-form-generator.component';

@Component({
  standalone: true,
  selector: 'app-landing-page-contact',
  styleUrl: './landing-page-contact.component.scss',
  templateUrl: './landing-page-contact.component.html',
  imports: [
    FormsModule,
    AnimateDirective,
    AppSocialMediaComponent,
    AppFormGeneratorComponent,
    LandingPageSectionTitleComponent,
  ],
})
export class LandingPageContactComponent {
  private _snackBar = inject(MatSnackBar);
  private _loadingStore = inject(LoadingStore);
  private _suggestionService = inject(SuggestionService);
  private _formGeneratorService = inject(FormGeneratorService);

  public formValue: IContactForm = {} as IContactForm;
  public form = this._formGeneratorService.init<IContactForm>([
    [
      {
        name: 'name',
        type: 'input',
        label: 'Insira o seu nome',
        validators: [Validators.required],
      },
    ],
    [
      {
        type: 'textarea',
        name: 'suggestion',
        label: 'Deixe a sua seugestão',
        validators: [Validators.required],
      },
    ],
  ]);

  public handleSubmit(model: IContactForm) {
    this._loadingStore.setState(true, 'Enviando a sua sugestão...');

    const contactDTO = this._suggestionService._model.buildRegisterDTO({
      author: model.name,
      creationDate: new Date(),
      suggestion: model.suggestion,
    });

    this._suggestionService
      .create<ISuggestionDB>(contactDTO)
      .then(() => {
        this._loadingStore.setState(false);
        this._snackBar.open('Sugestão enviada com sucesso, obrigado!', 'Ok', {
          duration: 8000,
        });

        this.form.group.reset();
      })
      .catch(() => {
        this._loadingStore.setState(false);
        this._snackBar.open(
          'Desculpe! Ocorreu um erro ao enviar, tente novamente mais tarde',
          'Ok',
          { duration: 8000 }
        );
      });
  }
}

interface IContactForm {
  name: string;
  suggestion: string;
}
