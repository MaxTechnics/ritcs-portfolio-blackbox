<template>
    <header class="header">
        <div class="header__content">
            <h1>Welkom!</h1>
            <p>Bekijk hier onze opdrachten en projecten!</p>
            <!-- <button class="btn-primary">Add Workout</button> -->
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    background-color: var(--header-yellow);
    padding: 0 auto;
    height: 40rem;
    overflow: hidden;
    border-bottom: 3px solid black;
}

.header__content {
    width: var(--content-width);
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    position: relative;
}

.header__content p {
    font-size: 3rem;
}

.header__content * {
    z-index: 1;
}

.header__content::after {
    content: '';
    position: absolute;
    background-color: var(--green);
    background: repeating-linear-gradient(
    -45deg,
    var(--green),
    var(--green) 10px,
    black 10px,
    black 13px
    );
    height: 25rem;
    width: 25rem;
    border-radius: 50%;
    border: 3px solid black;
    right: 0;
    top: 5rem;
}

.header__content::before {
    content: '';
    position: absolute;
    background-color: var(--blue);
    background: repeating-linear-gradient(
    -45deg,
    var(--blue),
    var(--blue) 10px,
    black 10px,
    black 13px
    );
    height: 18rem;
    width: 18rem;
    border-radius: 50%;
    border: 3px solid black;
    right: 20rem;
    bottom: -5rem;
}

h1 {
    font-size: 5rem;
    font-weight: 900;
    letter-spacing: 4px;
    margin-bottom: 2rem;
}
</style>
