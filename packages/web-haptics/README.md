# WebHaptics

Haptic feedback for the web. Supports React, Vue, and Svelte.

## Install

```sh
npm i web-haptics
```

## React

```tsx
import { useWebHaptics } from "web-haptics/react";

function App() {
  const { trigger } = useWebHaptics();

  return <button onClick={() => trigger("success")}>Tap me</button>;
}
```

## Vue

```vue
<script setup>
import { useWebHaptics } from "web-haptics/vue";

const { trigger } = useWebHaptics();
</script>

<template>
  <button @click="trigger('success')">Tap me</button>
</template>
```

## Svelte

```svelte
<script>
import { createWebHaptics } from "web-haptics/svelte";
import { onDestroy } from "svelte";

const { trigger, destroy } = createWebHaptics();
onDestroy(destroy);
</script>

<button on:click={() => trigger("success")}>Tap me</button>
```

## Vanilla

```ts
import { WebHaptics } from "web-haptics";

const haptics = new WebHaptics();
haptics.trigger("success");
```

## Built-in Presets

| Name      | Pattern                | Intensity |
| --------- | ---------------------- | --------- |
| `success` | `[50, 50, 50]`         | 0.5       |
| `nudge`   | `[80, 100, 200]`       | 0.5       |
| `error`   | `[50, 50, 50, 50, 50]` | 0.75      |
| `long`    | `[1000]`               | 1.0       |

You can also pass custom patterns directly:

```ts
trigger([100, 50, 100]); // custom pattern
trigger(200); // single vibration
trigger({ pattern: [50, 50, 50], description: "custom", intensity: 0.8 }); // full preset
```

## API

### `trigger(input?, options?)`

Trigger haptic feedback.

- `input` — preset name (`"success"`), number, `number[]`, or `HapticPreset`
- `options.intensity` — override intensity (0–1)

### `cancel()`

Stop the current pattern and cancel any ongoing vibration.

### `WebHaptics.isSupported`

Static boolean — `true` if the device supports the Vibration API.

## License

MIT

## Found this useful?

Follow me on [Twitter](https://twitter.com/lochieaxon).

## Other projects

You might also like:

- [Torph](https://torph.lochie.me) - Dependency-free animated text component.
- [easing.dev](https://easing.dev) - Easily create custom easing graphs.

# Acknowledgements

- Special thanks to [Alex](https://x.com/alexvanderzon) for assistance with the site design.
