<script setup lang="ts">
import { SelectTrigger as SelectTriggerPrimitive } from 'radix-vue';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-vue-next';
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
  class?: HTMLAttributes['class'];
  disabled?: boolean;
}>();
</script>

<template>
  <SelectTriggerPrimitive
    :class="
      cn(
        'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
        props.class
      )
    "
    :disabled="disabled"
  >
    <slot />
    <ChevronDown class="h-4 w-4 opacity-50" />
  </SelectTriggerPrimitive>
</template>