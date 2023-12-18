import type { Voluntario } from '@/interfaces/voluntarios.interface';
import http from '@/plugins/http';

import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { useToast } from "vue-toastification";

export const useVoluntariosStore = defineStore('voluntarios' , () => {
  const toast = useToast();


  const users = ref<Voluntario[]>([])
  const errorMessage = ref<string>('')
  const paginationData = ref<any>()
  const loading = ref<boolean>(false)
  const loadingDelete = ref<boolean>(false)
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

    const postUsers = async (user: Voluntario): Promise<any> => {
      loading.value = true
      errorMessage.value = ''
      try {
        const {data} = await http.post('post', user)
        console.log(data);
        
      } catch (error) {
        errorMessage.value = 'Error en la Base de datos, por favor recarga la página web'
        console.log(error);
        
      }finally {
        loading.value = false
      }
    }

    const deleteUser = async (id:string | undefined): Promise<any>  => {
    
        loadingDelete.value = true
        try {
          const newData = users.value.filter(user => user._id !== id)
          await http.delete(`delete/${id}`)
          users.value = newData;
          toast.success('Voluntario eliminado')
        } catch (error) {
          toast.error('Error al eliminar el voluntario, inténtelo más tarde')
        } finally {
          loadingDelete.value = false
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
          return
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
    loadingDelete,

    //getters


    //actions
    getUsers,
    setPage,
    getUserByName,
    postUsers,
    deleteUser
  };
});