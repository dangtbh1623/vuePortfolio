// Use: v-appear-scrolling:top="{duration: .2,delay: 0}

const scrollObserver = new IntersectionObserver(
    (entries, scrollObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translate(0,0)';
                entry.target.style.transform = 'rotate(0)';
                entry.target.style.transform = 'scale(1)';
                scrollObserver.unobserve(entry.target);
            }
        })
    }
);

export default {
    beforeMount(el, binding) {
        let duration = 2;
        let delay = 0;
        if (binding.value !== undefined) {
            duration = binding.value.duration;
            delay = binding.value.delay;
        }
        switch (binding.arg) {
            case 'top':
                el.style.opacity = 0;
                el.style.transform = 'translate(0,-10rem)';
                el.style.transition = 'all ' + duration + 's ' + 'ease-in-out ' + delay + 's';
                break;
            case 'bottom':
                el.style.opacity = 0;
                el.style.transform = 'translate(0,10rem)';
                el.style.transition = 'all ' + duration + 's ' + 'ease-in-out ' + delay + 's';
                break;
            case 'left':
                el.style.opacity = 0.5;
                el.style.transform = 'translate(-10rem,0)';
                el.style.transition = 'all ' + duration + 's ' + 'cubic-bezier(.3,1.64,.22,.89) ' + delay + 's';
                break;
            case 'right':
                el.style.opacity = 0;
                el.style.transform = 'translate(10rem,0)';
                el.style.transition = 'all ' + duration + 's ' + 'cubic-bezier(.3,1.64,.59,.75) ' + delay + 's';
                break;
            case 'rotation-fadein':
                el.style.opacity = 0;
                el.style.transform = 'rotate(90deg)';
                el.style.transition = 'all ' + duration + 's ' + 'cubic-bezier(.3,1.64,.59,.75) ' + delay + 's';
                break;
            case 'rotation-zoom':
                el.style.opacity = 0;
                el.style.transform = 'scale(0.5) rotate(90deg)';
                el.style.transition = 'all ' + duration + 's ' + 'ease-in-out ' + delay + 's';
                break;
            default:
                el.style.transform = 'initial';
        }

        scrollObserver.observe(el);
    }
}