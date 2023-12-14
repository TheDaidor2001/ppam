import type { Voluntario } from '@/interfaces/voluntarios.interface';
import http from '@/plugins/http';

import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useVoluntariosStore = defineStore('voluntarios' , () => {
  const users = ref<Voluntario[]>([])
  const errorMessage = ref<string>('')
  const paginationData = ref<any>()
  const loading = ref<boolean>(false)
  const size = ref<number>(6)
  const page = ref<number>(0)
  const actualPage = ref(page.value + 1) 

    const getUsers = async (page = 0, size= 6): Promise<any> => {
        loading.value = true
        errorMessage.value = ''
        
       try {
        const {data} = await http.get(`getAll?page=${page}&size=${size}`)
        users.value = data.docs;
        paginationData.value = data;
       } catch (error) {
        errorMessage.value = 'Error en la Base de datos, por favor recarga la página web'
       }finally {
        loading.value = false
       }
    }

    const setPage = (pageRecibed: number): void => {
      page.value = pageRecibed
    }

    const getUserByName = async (name: string): Promise<any> => {
      loading.value = true
      errorMessage.value = ''
      try {
        const {data} = await http.get(`getAll?nombre=${name}`)

        if(data.docs.length === 0){
          errorMessage.value = 'No se han econtrado voluntarios'
        }
        users.value = data.docs;
      } catch (error) {
        errorMessage.value = 'No se han econtrado voluntarios'
      }finally {
        loading.value = false
      }
    }

    watch(page, async () => {
      await getUsers(page.value, size.value)
      actualPage.value = page.value + 1;
    })



  

  return {
    //state propierties
    users,
    loading,
    size,
    page,
    actualPage,
    paginationData,
    errormessage: errorMessage,

    //getters


    //actions
    getUsers,
    setPage,
    getUserByName
  };
});