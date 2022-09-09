<script>
import { h, Transition } from "vue";

const TransitionSlide = (props, context) => {
  const data = {
    name: `slide-${props.axis}-${props.direction}`,
    appear: false,
    mode: "out-in",
    onBeforeEnter: el => (el.style.animationDuration = `${props.duration}s`),
    onBeforeLeave: el => (el.style.animationDuration = `${props.duration}s`)
  };

  return h(Transition, data, context.slots);
};

TransitionSlide.props = {
  duration: {
    type: Number,
    required: false,
    default: 0.5
  },

  direction: {
    type: String,
    required: false,
    default: "next"
  },

  axis: {
    type: String,
    required: false,
    default: "ver"
  }
};

export default TransitionSlide;
</script>

<style scoped>
.slide-ver-next-enter-active {
  animation: slide-ver-in 0.3s ease;
}

.slide-ver-next-leave-active {
  animation: slide-ver-out 0.3s ease;
}

.slide-ver-prev-enter-active {
  animation: slide-ver-out 0.3s ease reverse;
}

.slide-ver-prev-leave-active {
  animation: slide-ver-in 0.3s ease reverse;
}

@keyframes slide-ver-in {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slide-ver-out {
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
}

.slide-hor-next-enter-active {
  animation: slide-hor-in 0.3s ease;
}

.slide-hor-next-leave-active {
  animation: slide-hor-out 0.3s ease;
}

.slide-hor-prev-enter-active {
  animation: slide-hor-out 0.3s ease reverse;
}

.slide-hor-prev-leave-active {
  animation: slide-hor-in 0.3s ease reverse;
}

@keyframes slide-hor-in {
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slide-hor-out {
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
}
</style>
