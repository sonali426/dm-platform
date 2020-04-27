import {
    transition,
    trigger,
    query,
    style,
    animate,
    group,
    animateChild
} from '@angular/animations';

export const slideUpAnimation = trigger('routeAnimations', [
    transition('LoginPage <=> HomePage', [
        query(':leave', style({ position: 'absolute',width:'100%' }), {optional:true}),
    query(':enter', style({ position: 'absolute', width:'100%'}), {optional:true}),
        group([
            query(':enter', [
                style({ transform: 'translateY(100%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
            ], { optional: true }),
            query(':leave', [
                style({ transform: 'translateY(0%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
            ], { optional: true }),
        ])
    ])
])