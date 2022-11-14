import { useDraggable } from "element-plus/es";
import { ComputedRef } from "vue";

export default () => {
  const height = ref(410);

  const tabPaneList = reactive([
    { label: "唱段", name: "changDuan" },
    { label: "唱词", name: "changCi" },
  ]);

  const tabsRef = ref();
  const draggable = computed(() => true);

  const targetRef: ComputedRef<HTMLElement> = computed(() => tabsRef.value.$el);
  const headerRef: ComputedRef<HTMLElement> = computed(
    () => targetRef.value.firstElementChild as HTMLElement
  );

  useDraggable(targetRef, headerRef, draggable);

  const activeName = ref(tabPaneList[0].name);

  return {
    tabPaneList,
    activeName,
    tabsRef,
    height,
  };
};
