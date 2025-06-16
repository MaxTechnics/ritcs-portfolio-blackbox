<template>
    <div class="weekly window">
        <h2>Weekly Schedule</h2>
        <table class="weekly__table">
            <tr>
                <th>Day</th>
                <th>Exercise</th>
                <th>Time</th>
            </tr>
            <tr>
                <td>Monday</td>
                <td>Running</td>
                <td>6:00 AM</td>
            </tr>
            <tr>
                <td>Tuesday</td>
                <td>Swimming</td>
                <td>7:00 AM</td>
            </tr>
            <tr>
                <td>Wednesday</td>
                <td>Cycling</td>
                <td>6:30 AM</td>
            </tr>
            <tr>
                <td>Thursday</td>
                <td>Yoga</td>
                <td>6:00 AM</td>
            </tr>
            <tr>
                <td>Friday</td>
                <td>Weight-Training</td>
                <td>8:00 AM</td>
            </tr>
        </table>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.window {
    background-color: #fff;
    border: 3px solid black;
    box-shadow: 10px 10px 0 black;
    margin: auto;
}
.window h2 {
    border-bottom: 3px solid black;
    padding: 1rem 3rem;
    position: relative;
    padding-right: 7rem;
    font-size: 3.5rem;
}
.window h2::after {
    content: 'x';
    display: block;
    position: absolute;
    width: 5rem;
    height: 100%;
    border-left: 3px solid black;
    top: 0;
    right: 0;
    display: grid;
    place-items: center;
}

table {
    padding: 1rem 3rem 2rem 3rem;
}
table td{
    font-size: 2rem;
    font-weight: 500;
    padding-right: 3rem;
    padding-bottom: 1rem;
}
table th{
    font-size: 2.5rem;
    font-weight: 700;
    text-align: left;
    padding-right: 1rem;
    padding-bottom: .8rem;
}

</style>
