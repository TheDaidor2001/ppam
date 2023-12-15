<script setup lang="ts">
import { reactive } from 'vue';
import BackButton from '../components/BackButton.vue'
// import { Voluntario } from '../interfaces/voluntarios.interface';

const voluntario = reactive({
    nombre: '',
    contacto: '',
    congregacion: '',
    disponibilidad: [],
    observaciones: '',
})

const submitHandler = (data: any): any => {
    console.log(data);
}

</script>

<template>
    <main class="max-w-6xl mx-auto my-10 px-10 lg:px-0">
        <BackButton />
        <section class="grid mt-10 items-center">
            <FormKit type="form" submit-label="Añadir voluntario" @submit="submitHandler" :incomplete-message="false">
                <FormKit type="text" label="Nombre Completo" name="nombre"
                    :validation-messages="{ required: 'El nombre es obligatorio' }" validation="required"
                    v-model="voluntario.nombre" />
                <FormKit type="text" label="Contacto" name="contacto"
                    :validation-messages="{ required: 'El contacto es obligatorio' }" validation="required"
                    v-model="voluntario.contacto" />
                <FormKit type="select" label="Añade la congregación" name="congregación" validation="required"
                    :validation-messages="{ required: 'La congregación es obligatoria' }" :options="[
                        '--Selecciona una congregación',
                        'Timbabé',
                        'Sampaka',
                        'Paraiso',
                        'Lampert',
                        'Buena Esperanza',
                        'Caracolas',
                        'Campo Yaounde',
                        'Inglés',
                        'Francés',
                        'Fang',
                        'Ela Nguema',
                    ]" v-model="voluntario.congregacion" />
                <FormKit type="checkbox" label="Seleccione disponibilidad" validation="required"
                    :validation-messages="{ required: 'Debes añadir mínimo 1 turno' }" :options="{
                        'martesT1': 'Martes(T1)',
                        'martesT2': 'Martes(T2)',
                        'martesT3': 'Martes(T3)',
                        'martesT4': 'Martes(T4)',
                        'miercolesT1': 'Miercoles(T1)',
                        'miercolesT2': 'Miercoles(T2)',
                        'miercolesT3': 'Miercoles(T3)',
                        'miercolesT4': 'Miercoles(T4)',
                        'juevesT1': 'Jueves(T1)',
                        'juevesT2': 'Jueves(T2)',
                        'juevesT3': 'Jueves(T3)',
                        'juevesT4': 'Jueves(T4)',
                        'viernesT1': 'Viernes(T1)',
                        'viernesT2': 'Viernes(T2)',
                        'viernesT3': 'Viernes(T3)',
                        'viernesT4': 'Viernes(T4)',
                        'sabadoT1': 'Sábado(T1)',
                        'sabadoT2': 'Sábado(T2)',
                        'sabadoT3': 'Sábado(T3)',
                        'sabadoT4': 'Sábado(T4)',
                        'domingoT1': 'Domingo(T1)',
                        'domingoT2': 'Domingo(T2)',
                        'domingoT3': 'Domingo(T3)',
                        'domingoT4': 'Domingo(T4)',
                    }" name="disponibilidad" v-model="voluntario.disponibilidad" />

                <FormKit type="textarea" label="Observaciones"
                    placeholder="Ej: Dificultades para llegar puntual, es precursor, es anciano...etc"
                    :help="`${voluntario.observaciones ? voluntario.observaciones.length : 0} / 120`"
                    validation="length:0,120" :validation-messages="{
                        length: 'La observación no puede ser de más de 120 carácteres'
                    }" v-model="voluntario.observaciones" />
            </FormKit>
        </section>
    </main>
</template>

<style scoped>
[data-invalid] .formkit-input {
    border-color: red;
    box-shadow: 0 0 0 1px red;
}
</style>

