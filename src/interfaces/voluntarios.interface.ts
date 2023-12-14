// Generated by https://quicktype.io

export interface Voluntarios {
    docs:          Voluntario[];
    totalDocs:     number;
    offset:        number;
    limit:         number;
    totalPages:    number;
    page:          number;
    pagingCounter: number;
    hasPrevPage:   boolean;
    hasNextPage:   boolean;
    prevPage:      null;
    nextPage:      number;
}

export interface Voluntario {
    _id:            string;
    nombre:         string;
    contacto:       number;
    disponibilidad: string[];
    congregacion:   string;
    observasiones:  string;
}
