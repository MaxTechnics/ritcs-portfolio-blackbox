<template>
    <button class="btn-primary">
        <slot />
    </button>
</template>

<style lang="scss" scoped>
.btn-primary {
    background-color: var(--accent_ylw);
    border: 2px solid var(--shadow_color);
    font-family: inherit;
    font-size: 2rem;
    font-weight: 600;
    padding: .5rem 1rem;
    box-shadow: 5px 5px 0 var(--shadow_color);
    margin-top: 2rem;
    margin-bottom: 2rem;
    cursor: pointer;
    transition: all .2s;
}
.btn-primary:hover {
    // transform: scale(1.05);
    box-shadow: 8px 8px 0 var(--shadow_color);
}
</style>
