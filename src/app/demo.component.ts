import {Component, effect, OnInit, viewChild, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  AccordionComponent,
  AccordionGroupDirective,
  AccordionToggleDirective,
  AlertDirective,
  AvatarDirective,
  AvatarIndicatorDirective,
  BadgeDirective,
  BreadcrumbDirective,
  BreadcrumbItemDirective,
  ButtonDirective,
  ButtonGroupDirective,
  CardDirective,
  CheckboxComponent,
  ChipDirective, TooltipDirective
} from 'angular-material-tailwind';
import {AlertData, AlertService} from '../../projects/angular-material-tailwind/src/lib/alert/alerts.service';
import {
  AlertsContainerComponent
} from '../../projects/angular-material-tailwind/src/lib/alert/alerts-container.component';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [
    AccordionComponent,
    AccordionToggleDirective,
    AccordionGroupDirective,
    AlertDirective,
    AvatarDirective,
    AvatarIndicatorDirective,
    BadgeDirective,
    BreadcrumbDirective,
    BreadcrumbItemDirective,
    ButtonDirective,
    ButtonGroupDirective,
    CardDirective,
    CheckboxComponent,
    ChipDirective,
    TooltipDirective,
    AlertsContainerComponent,
  ],
  template: `
    <div class="p-2">
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
      <button
        class="middle none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        data-ripple-light="true"
      >
        Button
      </button>
    </div>

    <div class="p-12">
      <div mtAccordionGroup>
        <mt-accordion>
          <div heading mtAccordionToggle class="w-full flex-grow py-5">
            <span>What is Material Tailwind?</span>
          </div>
          <div class="pb-5 text-sm text-slate-500">
            Material Tailwind is a framework that enhances Tailwind CSS with additional styles and components.
          </div>
        </mt-accordion>
        <mt-accordion>
          <div heading mtAccordionToggle class="w-full flex-grow py-5">
            <span>What is Material Tailwind?</span>
          </div>
          <div class="pb-5 text-sm text-slate-500">
            Material Tailwind is a framework that enhances Tailwind CSS with additional styles and components.
          </div>
        </mt-accordion>
      </div>
    </div>

    <div class="p-12">
      <div mtAlert [variant]="'default'" [size]="'small'" class="flex-col">
        <p class="flex text-base">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5 mr-2 mt-0.5"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path></svg>
          Success
        </p>
        <p class="ml-4 p-3">
          I don&apos;t know what that word means. Im happy. But success, that goes back to what in somebody&apos;s eyes success means. For me, success is inner peace. That&apos;s a good day for me.
        </p>

        <button class="flex items-center justify-center transition-all w-8 h-8 rounded-md text-white hover:bg-white/10 active:bg-white/10 absolute top-1.5 right-1.5" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-5 w-5" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>
    </div>

    <div class="p-12">
      <div class="flex gap-4">
        <div class="relative inline-flex">
          <img
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
            mtAvatar
            [size]="'large'"
            class="rounded-lg"
          />
          <span mtAvatarIndicator [position]="'bottom-right'" class="bg-green-500"></span>
        </div>
      </div>
    </div>

    <div class="p-12">
      <div class="relative inline-flex">
        <button class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
          Notifications
        </button>
        <span mtBadge [position]="'bottom-left'" class="bg-red-500">
        5
      </span>
      </div>
    </div>

    <div class="p-12">
      <nav aria-label="breadcrumb" class="w-max">
        <ol mtBreadcrumb class="bg-slate-50">
          <li mtBreadcrumbItem class="text-slate-500 hover:text-slate-800">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
            </a>
            <span class="pointer-events-none mx-2 text-slate-800">
              /
            </span>
          </li>
          <li class="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
            <a href="#">Components</a>
            <span class="pointer-events-none mx-2 text-slate-800">
              /
            </span>
          </li>
          <li class="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
            <a href="#">Breadcrumbs</a>
          </li>
        </ol>
      </nav>
    </div>

    <div class="p-12 flex gap-4">
      <button mtButton class="" type="button">
        Button
      </button>
      <button mtButton variant="outline" class="" type="button">
        Button
      </button>
      <button mtButton variant="text" class="" type="button">
        Button
      </button>
    </div>

    <div class="p-12 flex items-center gap-4">
      <div>
        <button mtButton size="xs" class="" type="button">
          Button
        </button>
      </div>
      <div>
        <button mtButton size="sm" class="" type="button">
          Button
        </button>
      </div>
      <div>
        <button mtButton size="md" class="" type="button">
          Button
        </button>
      </div>
      <div>
        <button mtButton size="lg" class="" type="button">
          Button
        </button>
      </div>
      <div>
        <button mtButton size="xl" class="" type="button">
          Button
        </button>
      </div>
    </div>

    <div class="p-12">
      <div class="flex items-center gap-4">
        <div>
          <div mtButtonGroup size="xs" class="row flex">
            <button
              type="button"
            >
              One
            </button>
            <button
              type="button"
            >
              Two
            </button>
            <button
              type="button"
            >
              Three
            </button>
          </div>
        </div>
        <div>
          <div mtButtonGroup size="sm" class="row flex">
            <button
              type="button"
            >
              One
            </button>
            <button
              type="button"
            >
              Two
            </button>
            <button
              type="button"
            >
              Three
            </button>
          </div>
        </div>
        <div>
          <div mtButtonGroup size="md" class="row flex">
            <button
              type="button"
            >
              One
            </button>
            <button
              type="button"
            >
              Two
            </button>
            <button
              type="button"
            >
              Three
            </button>
          </div>
        </div>
        <div>
          <div mtButtonGroup size="lg" class="row flex">
            <button
              type="button"
            >
              One
            </button>
            <button
              type="button"
            >
              Two
            </button>
            <button
              type="button"
            >
              Three
            </button>
          </div>
        </div>
        <div>
          <div mtButtonGroup size="xl" class="row flex">
            <button
              type="button"
            >
              One
            </button>
            <button
              type="button"
            >
              Two
            </button>
            <button
              type="button"
            >
              Three
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="p-12">
      <div mtCard>
        <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
          <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" alt="card-image" />
        </div>
        <div class="p-4">
          <h6 class="mb-2 text-slate-800 text-xl font-semibold">
            Website Review Check
          </h6>
          <p class="text-slate-600 leading-normal font-light">
            The place is close to Barceloneta Beach and bus stop just 2 min by walk
            and near to &quot;Naviglio&quot; where you can enjoy the main night life in
            Barcelona.
          </p>
        </div>
        <div class="px-4 pb-4 pt-0 mt-2">
          <button class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            Read more
          </button>
        </div>
      </div>
    </div>
    <div class="p-12">
      <mt-checkbox>Remember Me</mt-checkbox>
    </div>

    <div class="p-12 flex gap-2 items-center">
      <div><div mtChip>Chip</div></div>
      <div><div mtChip variant="gradient">Chip</div></div>
      <div><div mtChip variant="outline">Chip</div></div>
      <div><div mtChip variant="ghost">Chip</div></div>
      <div><div mtChip size="sm">Chip</div></div>
      <div><div mtChip size="md">Chip</div></div>
      <div><div mtChip size="lg">Chip</div></div>
      <div><div mtChip size="md" class="bg-red-600">Chip</div></div>
    </div>

    <div class="flex flex-wrap gap-3 mb-3">
      <div [mtTooltip]="tooltip" position="bottom">
        <button class="relative select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          Show Tooltip
        </button>
        <ng-template #tooltip>
          <div>
            Material Tailwind
          </div>
        </ng-template>
      </div>

      <div [mtTooltip]="tooltip" position="top">
        <button class="relative select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          Show Tooltip
        </button>
        <ng-template #tooltip>
          <div>
            Material Tailwind
          </div>
        </ng-template>
      </div>

      <div [mtTooltip]="tooltip" position="top">
        <button class="relative select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          Show Tooltip
        </button>
        <ng-template #tooltip>
          <div>
            Material Tailwind
          </div>
        </ng-template>
      </div>

      <div [mtTooltip]="tooltip" position="top">
        <button class="relative select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          Show Tooltip
        </button>
        <ng-template #tooltip>
          <div>
            Material Tailwind
          </div>
        </ng-template>
      </div>

      <div [mtTooltip]="tooltip" position="top">
        <button class="relative select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          Show Tooltip
        </button>
        <ng-template #tooltip>
          <div>
            Material Tailwind
          </div>
        </ng-template>
      </div>

      <div [mtTooltip]="tooltip" position="top">
        <button class="relative select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          Show Tooltip
        </button>
        <ng-template #tooltip>
          <div>
            Material Tailwind
          </div>
        </ng-template>
      </div>

      <div [mtTooltip]="tooltip" position="top">
        <button class="relative select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          Show Tooltip
        </button>
        <ng-template #tooltip>
          <div>
            Material Tailwind
          </div>
        </ng-template>
      </div>

      <div [mtTooltip]="tooltip" position="top">
        <button class="relative select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          Show Tooltip
        </button>
        <ng-template #tooltip>
          <div>
            Material Tailwind
          </div>
        </ng-template>
      </div>

      <div [mtTooltip]="tooltip" position="top">
        <button class="relative select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          Show Tooltip
        </button>
        <ng-template #tooltip>
          <div>
            Material Tailwind
          </div>
        </ng-template>
      </div>

      <div [mtTooltip]="tooltip" position="left">
        <button class="relative select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          Show Tooltip
        </button>
        <ng-template #tooltip>
          <div>
            Material Tailwind
          </div>
        </ng-template>
      </div>

      <div [mtTooltip]="tooltip" position="right">
        <button class="relative select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          Show Tooltip
        </button>
        <ng-template #tooltip>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci animi autem consequuntur culpa doloremque facere ipsa ipsum iste magni nam quaerat, quidem tenetur unde velit veniam voluptas. Eius, et?
          </div>
        </ng-template>
      </div>
    </div>

    <div class="fixed top-2 right-2">
      <mt-alerts-container></mt-alerts-container>

    </div>
    <button (click)="showSuccessAlert()">Show Success Alert</button>
  `,
})
export class DemoComponent implements OnInit {
  alertsContainer = viewChild(AlertsContainerComponent);

  constructor(public alertService: AlertService) {
    effect(() => {
      if (this.alertsContainer()) {
        this.alertService.setAlertContainer((this.alertsContainer() as AlertsContainerComponent).viewContainerRef);
      }
    });
  }

  ngOnInit() {
    // this.alertService.setAlertContainer(this.alertsContainer.viewContainerRef);
  }

  showSuccessAlert() {
    const alertData: AlertData = {
      type: 'success',
      message: 'Operation completed successfully!'
    };

    // Pass the ViewContainerRef to the service
    this.alertService.showAlert(alertData);
  }
}
