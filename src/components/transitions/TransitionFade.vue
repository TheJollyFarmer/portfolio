<script>
import { h, Transition } from "vue";

const TransitionFade = (props, context) => {
  const data = {
    name: "fade",
    appear: true,
    mode: "out-in",
    onBeforeEnter: el => (el.style.animationDuration = `${props.duration}s`),
    onBeforeLeave: el => (el.style.animationDuration = `${props.duration}s`)
  };

  return h(Transition, data, context.slots);
};

TransitionFade.props = {
  duration: {
    type: Number,
    required: false,
    default: 0.5
  }
};

export default TransitionFade;
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  animation-name: fade;
  animation-timing-function: ease-in-out;
}

.fade-leave-active {
  animation-direction: reverse;
}

@keyframes fade {
  from {
    opacity: 0.5;
  }

  to {
    opacity: 1;
  }
}
</style>
