$(function() {


    /*
        
        var multiple = $('#multipleInput').materialize_autocomplete({
            limit: 90,
            multiple: {
                enable: true
            },
            appender: {
                el: '.ac-users'
            },
            dropdown: {
                el: '#multipleDropdown'
            }
        });



        var resultCache = {

            'A': [{

                "id": "ma0",
                "text": "Administración financiera",
                "highlights": 'universitario'
            }, {
                "id": "ma1",
                "text": "Administración financiera I",
                "highlights": 'universitario'

            }, {
                "id": "ma2",
                "text": "Administración general",
                "highlights": 'universitario'
            }, {
                "id": "ma3",
                "text": "Alemán",
                "highlights": "avanzado"
            }, {
                "id": "ma4",
                "text": "Alemán",
                "highlights": "básico"
            }, {
                "id": "ma5",
                "text": "Alemán",
                "highlights": "intermedio"

            }, {
                "id": "ma6",
                "text": "Álgebra",
                "highlights": "universitario"
            }, {
                "id": "ma7",
                "text": "Álgebra I",
                "highlights": "universitario"
            }, {
                "id": "ma8",
                "text": "Álgebra II",
                "highlights": "universitario"
            }, {
                "id": "ma9",
                "text": "Álgebra y geometría",
                "highlights": "universitario"
            }, {
                "id": "mb0",
                "text": "Algoritmos y estructuras de datos I",
                "highlights": "universitario"
            }, {
                "id": "mb1",
                "text": "Algoritmos y programación I",
                "highlights": "universitario"
            }, {
                "id": "mb2",
                "text": "Algoritmos y programación II",
                "highlights": "universitario"

            }, {
                "id": "mb3",
                "text": "Análisis matemático",
                "highlights": "secundario"

            }, {
                "id": "mb4",
                "text": "Análisis matemático",
                "highlights": "universitario"

            }, {
                "id": "mb5",
                "text": "Análisis matemático I",
                "highlights": "universitario"

            }, {
                "id": "mb6",
                "text": "Análisis matemático II",
                "highlights": "universitario"
            }, {
                "id": "mx6",
                "text": "Anatomía",
                "highlights": "universitario"

            }, {
                "id": "mb7",
                "text": "Anatomofisiología",
                "highlights": "universitario"

            }, {
                "id": "mb8",
                "text": "Antropología",
                "highlights": "universitario"

            }, {
                "id": "mb9",
                "text": "Antropología cultural",
                "highlights": "secundario"

            }, {
                "id": "mc0",
                "text": "Antropología y salud",
                "highlights": "universitario"

            }, {
                "id": "mc1",
                "text": "Arquitectura I",
                "highlights": "universitario"
            }, {
                "id": "mc2",
                "text": "Artes visuales",
                "highlights": "secundario"
            }, {
                "id": "mc3",
                "text": "Autocad"

            }],
            'AD': [{
                "id": "ma0",
                "text": "Administración financiera",
                "highlights": 'universitario'
            }, {
                "id": "ma1",
                "text": "Administración financiera I",
                "highlights": 'universitario'

            }, {
                "id": "ma2",
                "text": "Administración general",
                "highlights": 'universitario'
            }],

            'ADM': [{
                "id": "ma0",
                "text": "Administración financiera",
                "highlights": 'universitario'
            }, {
                "id": "ma1",
                "text": "Administración financiera I",
                "highlights": 'universitario'

            }, {
                "id": "ma2",
                "text": "Administración general",
                "highlights": 'universitario'
            }],

            'ADMINISTRACION': [{
                "id": "ma0",
                "text": "Administración financiera",
                "highlights": 'universitario'
            }, {
                "id": "ma1",
                "text": "Administración financiera I",
                "highlights": 'universitario'

            }, {
                "id": "ma2",
                "text": "Administración general",
                "highlights": 'universitario'
            }],

            'AL': [{
                "id": "ma3",
                "text": "Alemán",
                "highlights": "avanzado"
            }, {
                "id": "ma4",
                "text": "Alemán",
                "highlights": "básico"
            }, {
                "id": "ma5",
                "text": "Alemán",
                "highlights": "intermedio"

            }, {
                "id": "ma6",
                "text": "Álgebra",
                "highlights": "universitario"
            }, {
                "id": "ma7",
                "text": "Álgebra I",
                "highlights": "universitario"
            }, {
                "id": "ma8",
                "text": "Álgebra II",
                "highlights": "universitario"
            }, {
                "id": "ma9",
                "text": "Álgebra y geometría",
                "highlights": "universitario"
            }, {
                "id": "mb0",
                "text": "Algoritmos y estructuras de datos I",
                "highlights": "universitario"
            }, {
                "id": "mb1",
                "text": "Algoritmos y programación I",
                "highlights": "universitario"
            }, {
                "id": "mb2",
                "text": "Algoritmos y programación II",
                "highlights": "universitario"

            }],


            'ALE': [{
                "id": "ma3",
                "text": "Alemán",
                "highlights": "avanzado"
            }, {
                "id": "ma4",
                "text": "Alemán",
                "highlights": "básico"
            }, {
                "id": "ma5",
                "text": "Alemán",
                "highlights": "intermedio"

            }],


            'ALEMAN': [{
                "id": "ma3",
                "text": "Alemán",
                "highlights": "avanzado"
            }, {
                "id": "ma4",
                "text": "Alemán",
                "highlights": "básico"
            }, {
                "id": "ma5",
                "text": "Alemán",
                "highlights": "intermedio"

            }],


            'ALG': [{
                "id": "ma6",
                "text": "Álgebra",
                "highlights": "universitario"
            }, {
                "id": "ma7",
                "text": "Álgebra I",
                "highlights": "universitario"
            }, {
                "id": "ma8",
                "text": "Álgebra II",
                "highlights": "universitario"
            }, {
                "id": "ma9",
                "text": "Álgebra y geometría",
                "highlights": "universitario"
            }, {
                "id": "mb0",
                "text": "Algoritmos y estructuras de datos I",
                "highlights": "universitario"
            }, {
                "id": "mb1",
                "text": "Algoritmos y programación I",
                "highlights": "universitario"
            }, {
                "id": "mb2",
                "text": "Algoritmos y programación II",
                "highlights": "universitario"

            }],


            'ALGE': [{
                "id": "ma6",
                "text": "Álgebra",
                "highlights": "universitario"
            }, {
                "id": "ma7",
                "text": "Álgebra I",
                "highlights": "universitario"
            }, {
                "id": "ma8",
                "text": "Álgebra II",
                "highlights": "universitario"
            }, {
                "id": "ma9",
                "text": "Álgebra y geometría",
                "highlights": "universitario"
            }],

            'ALGEBRA': [{
                "id": "ma6",
                "text": "Álgebra",
                "highlights": "universitario"
            }, {
                "id": "ma7",
                "text": "Álgebra I",
                "highlights": "universitario"
            }, {
                "id": "ma8",
                "text": "Álgebra II",
                "highlights": "universitario"
            }, {
                "id": "ma9",
                "text": "Álgebra y geometría",
                "highlights": "universitario"
            }],

            'ALGO': [{
                "id": "mb0",
                "text": "Algoritmos y estructuras de datos I",
                "highlights": "universitario"
            }, {
                "id": "mb1",
                "text": "Algoritmos y programación I",
                "highlights": "universitario"
            }, {
                "id": "mb2",
                "text": "Algoritmos y programación II",
                "highlights": "universitario"

            }],

            'ALGORITMO': [{
                "id": "mb0",
                "text": "Algoritmos y estructuras de datos I",
                "highlights": "universitario"
            }, {
                "id": "mb1",
                "text": "Algoritmos y programación I",
                "highlights": "universitario"
            }, {
                "id": "mb2",
                "text": "Algoritmos y programación II",
                "highlights": "universitario"

            }],

            'ALGORITMOS': [{
                "id": "mb0",
                "text": "Algoritmos y estructuras de datos I",
                "highlights": "universitario"
            }, {
                "id": "mb1",
                "text": "Algoritmos y programación I",
                "highlights": "universitario"
            }, {
                "id": "mb2",
                "text": "Algoritmos y programación II",
                "highlights": "universitario"

            }],

            'B': [{
                "id": "mc4",
                "text": "Bajo",
                "highlights": "avanzado"
            }, {
                "id": "mc5",
                "text": "Bajo",
                "highlights": "basico"
            }, {
                "id": "mc6",
                "text": "Bajo",
                "highlights": "intermedio"
            }, {
                "id": "mc7",
                "text": "Bases de datos",
                "highlights": "secundario"
            }, {
                "id": "mc8",
                "text": "Batería",
                "highlights": "avanzado"
            }, {
                "id": "mc9",
                "text": "Batería",
                "highlights": "basico"
            }, {
                "id": "md0",
                "text": "Batería",
                "highlights": "intermedio"
            }, {
                "id": "md1",
                "text": "Bioética I",
                "highlights": "universitario"
            }, {
                "id": "md2",
                "text": "Biología",
                "highlights": "secundario"
            }, {
                "id": "md3",
                "text": "Biología",
                "highlights": "universitario"
            }, {
                "id": "md4",
                "text": "Biología e introducción a la biología celular",
                "highlights": "universitario"
            }, {
                "id": "md5",
                "text": "Biología general",
                "highlights": "universitario"
            }, {
                "id": "md6",
                "text": "Biología, genética y sociedad",
                "highlights": "secundario"
            }, {
                "id": "md7",
                "text": "Bioquímica aplicada",
                "highlights": "universitario"
            }],

            'BA': [{
                "id": "mc4",
                "text": "Bajo",
                "highlights": "avanzado"
            }, {
                "id": "mc5",
                "text": "Bajo",
                "highlights": "basico"
            }, {
                "id": "mc6",
                "text": "Bajo",
                "highlights": "intermedio"
            }, {
                "id": "mc7",
                "text": "Bases de datos",
                "highlights": "secundario"
            }, {
                "id": "mc8",
                "text": "Batería",
                "highlights": "avanzado"
            }, {
                "id": "mc9",
                "text": "Batería",
                "highlights": "basico"
            }, {
                "id": "md0",
                "text": "Batería",
                "highlights": "intermedio"
            }],


            'BAJ': [{
                "id": "mc4",
                "text": "Bajo",
                "highlights": "avanzado"
            }, {
                "id": "mc5",
                "text": "Bajo",
                "highlights": "basico"
            }, {
                "id": "mc6",
                "text": "Bajo",
                "highlights": "intermedio"
            }],

            'BAJO': [{
                "id": "mc4",
                "text": "Bajo",
                "highlights": "avanzado"
            }, {
                "id": "mc5",
                "text": "Bajo",
                "highlights": "basico"
            }, {
                "id": "mc6",
                "text": "Bajo",
                "highlights": "intermedio"
            }],


            'BAS': [{
                "id": "mc7",
                "text": "Bases de datos",
                "highlights": "secundario"
            }],


            'BASE': [{
                "id": "mc7",
                "text": "Bases de datos",
                "highlights": "secundario"
            }],

            'BASE DE DATOS': [{
                "id": "mc7",
                "text": "Bases de datos",
                "highlights": "secundario"
            }],

            'BAT': [{
                "id": "mc8",
                "text": "Batería",
                "highlights": "avanzado"
            }, {
                "id": "mc9",
                "text": "Batería",
                "highlights": "basico"
            }, {
                "id": "md0",
                "text": "Batería",
                "highlights": "intermedio"
            }],


            'BATERIA': [{
                "id": "mc8",
                "text": "Batería",
                "highlights": "avanzado"
            }, {
                "id": "mc9",
                "text": "Batería",
                "highlights": "basico"
            }, {
                "id": "md0",
                "text": "Batería",
                "highlights": "intermedio"
            }],


            'BIO': [{
                "id": "md1",
                "text": "Bioética I",
                "highlights": "universitario"
            }, {
                "id": "md2",
                "text": "Biología",
                "highlights": "secundario"
            }, {
                "id": "md3",
                "text": "Biología",
                "highlights": "universitario"
            }, {
                "id": "md4",
                "text": "Biología e introducción a la biología celular",
                "highlights": "universitario"
            }, {
                "id": "md5",
                "text": "Biología general",
                "highlights": "universitario"
            }, {
                "id": "md6",
                "text": "Biología, genética y sociedad",
                "highlights": "secundario"
            }, {
                "id": "md7",
                "text": "Bioquímica aplicada",
                "highlights": "universitario"
            }],


            'BIOE': [{
                "id": "md1",
                "text": "Bioética I",
                "highlights": "universitario"
            }],

            'BIOETICA': [{
                "id": "md1",
                "text": "Bioética I",
                "highlights": "universitario"
            }],



            'BIOL': [{
                "id": "md2",
                "text": "Biología",
                "highlights": "secundario"
            }, {
                "id": "md3",
                "text": "Biología",
                "highlights": "universitario"
            }, {
                "id": "md4",
                "text": "Biología e introducción a la biología celular",
                "highlights": "universitario"
            }, {
                "id": "md5",
                "text": "Biología general",
                "highlights": "universitario"
            }, {
                "id": "md6",
                "text": "Biología, genética y sociedad",
                "highlights": "secundario"
            }],

            'BIOL': [{
                "id": "md2",
                "text": "Biología",
                "highlights": "secundario"
            }, {
                "id": "md3",
                "text": "Biología",
                "highlights": "universitario"
            }, {
                "id": "md4",
                "text": "Biología e introducción a la biología celular",
                "highlights": "universitario"
            }, {
                "id": "md5",
                "text": "Biología general",
                "highlights": "universitario"
            }, {
                "id": "md6",
                "text": "Biología, genética y sociedad",
                "highlights": "secundario"
            }],


            'BIOLOGIA': [{
                "id": "md2",
                "text": "Biología",
                "highlights": "secundario"
            }, {
                "id": "md3",
                "text": "Biología",
                "highlights": "universitario"
            }, {
                "id": "md4",
                "text": "Biología e introducción a la biología celular",
                "highlights": "universitario"
            }, {
                "id": "md5",
                "text": "Biología general",
                "highlights": "universitario"
            }, {
                "id": "md6",
                "text": "Biología, genética y sociedad",
                "highlights": "secundario"
            }],

            'BIOQ': [{
                "id": "md7",
                "text": "Bioquímica aplicada",
                "highlights": "universitario"
            }],

            'BIOQUIMICA': [{
                "id": "md7",
                "text": "Bioquímica aplicada",
                "highlights": "universitario"
            }],


            'C': [{
                "id": "md8",
                "text": "Cálculo financiero",
                "highlights": "universitario"
            }, {
                "id": "md9",
                "text": "Cálculo I",
                "highlights": "universitario"
            }, {
                "id": "me0",
                "text": "Cálculo II",
                "highlights": "universitario"
            }, {
                "id": "me1",
                "text": "Cálculo numérico",
                "highlights": "universitario"
            }, {
                "id": "me2",
                "text": "Canto",
                "highlights": "avanzado"
            }, {
                "id": "me3",
                "text": "Canto",
                "highlights": "basico"
            }, {
                "id": "me4",
                "text": "Canto",
                "highlights": "intermedio"
            }, {
                "id": "me5",
                "text": "Certificate of proficiency in english - CPE",
                "highlights": "avanzado"
            }, {
                "id": "me6",
                "text": "Charango",
                "highlights": "avanzado"
            }, {
                "id": "me7",
                "text": "Charango",
                "highlights": "basico"
            }, {
                "id": "me8",
                "text": "Charango",
                "highlights": "intermedio"
            }, {
                "id": "me9",
                "text": "Chino",
                "highlights": "avanzado"
            }, {
                "id": "mf0",
                "text": "Chino",
                "highlights": "basico"
            }, {
                "id": "mf1",
                "text": "Chino",
                "highlights": "intermedio"
            }, {
                "id": "mf2",
                "text": "Ciencia política",
                "highlights": "universitario"
            }, {
                "id": "mf3",
                "text": "Ciencias naturales",
                "highlights": "primaria"
            }, {
                "id": "mf4",
                "text": "Ciencias naturales",
                "highlights": "primaria"
            }, {
                "id": "mf5",
                "text": "Ciencias naturales",
                "highlights": "secundario"
            }, {
                "id": "mf6",
                "text": "Ciencias sociales",
                "highlights": "primaria"
            }, {
                "id": "mf8",
                "text": "Ciencias sociales",
                "highlights": "secundario"
            }, {
                "id": "my0",
                "text": "Computación",
                "highlights": "universitario"
            }, {
                "id": "mf9",
                "text": "Comunicación, cultura y sociedad",
                "highlights": "secundario"
            }, {
                "id": "mg0",
                "text": "Comunicación I",
                "highlights": "universitario"
            }, {
                "id": "mg1",
                "text": "Conceptos básicos de química",
                "highlights": "universitario"
            }, {
                "id": "mg3",
                "text": "Conocimiento de materiales",
                "highlights": "secundario"
            }, {
                "id": "mg4",
                "text": "Construcción de ciudadanía",
                "highlights": "secundario"
            }, {
                "id": "mg5",
                "text": "Contabilidad básica",
                "highlights": "universitario"

            }, {
                "id": "mg6",
                "text": "Contabilidad I",
                "highlights": "universitario"

            }, {
                "id": "mg7",
                "text": "Contabilidad II",
                "highlights": "universitario"

            }, {
                "id": "mg8",
                "text": "Contabilidad III",
                "highlights": "universitario"

            }, {
                "id": "mg9",
                "text": "Contabilidad patrimonial y de gestión",
                "highlights": "secundario"

            }, {
                "id": "mh0",
                "text": "Costos",
                "highlights": "secundario"

            }, {
                "id": "mh1",
                "text": "Crecimiento y desarrollo",
                "highlights": "universitario"
            }, {
                "id": "mh2",
                "text": "Defensa del consumidor y del usuario",
                "highlights": "universitario"
            }],

            'CA': [{
                "id": "md8",
                "text": "Cálculo financiero",
                "highlights": "universitario"
            }, {
                "id": "md9",
                "text": "Cálculo I",
                "highlights": "universitario"
            }, {
                "id": "me0",
                "text": "Cálculo II",
                "highlights": "universitario"
            }, {
                "id": "me1",
                "text": "Cálculo numérico",
                "highlights": "universitario"
            }, {
                "id": "me2",
                "text": "Canto",
                "highlights": "avanzado"
            }, {
                "id": "me3",
                "text": "Canto",
                "highlights": "basico"
            }, {
                "id": "me4",
                "text": "Canto",
                "highlights": "intermedio"
            }],

            'CAL': [{
                "id": "md8",
                "text": "Cálculo financiero",
                "highlights": "universitario"
            }, {
                "id": "md9",
                "text": "Cálculo I",
                "highlights": "universitario"
            }, {
                "id": "me0",
                "text": "Cálculo II",
                "highlights": "universitario"
            }, {
                "id": "me1",
                "text": "Cálculo numérico",
                "highlights": "universitario"
            }],

            'CALCULO': [{
                "id": "md8",
                "text": "Cálculo financiero",
                "highlights": "universitario"
            }, {
                "id": "md9",
                "text": "Cálculo I",
                "highlights": "universitario"
            }, {
                "id": "me0",
                "text": "Cálculo II",
                "highlights": "universitario"
            }, {
                "id": "me1",
                "text": "Cálculo numérico",
                "highlights": "universitario"
            }],

            'CAN': [{
                "id": "me2",
                "text": "Canto",
                "highlights": "avanzado"
            }, {
                "id": "me3",
                "text": "Canto",
                "highlights": "basico"
            }, {
                "id": "me4",
                "text": "Canto",
                "highlights": "intermedio"
            }],


            'CANTO': [{
                "id": "me2",
                "text": "Canto",
                "highlights": "avanzado"
            }, {
                "id": "me3",
                "text": "Canto",
                "highlights": "basico"
            }, {
                "id": "me4",
                "text": "Canto",
                "highlights": "intermedio"
            }],


            'CH': [{
                "id": "me6",
                "text": "Charango",
                "highlights": "avanzado"
            }, {
                "id": "me7",
                "text": "Charango",
                "highlights": "basico"
            }, {
                "id": "me8",
                "text": "Charango",
                "highlights": "intermedio"
            }, {
                "id": "me9",
                "text": "Chino",
                "highlights": "avanzado"
            }, {
                "id": "mf0",
                "text": "Chino",
                "highlights": "basico"
            }, {
                "id": "mf1",
                "text": "Chino",
                "highlights": "intermedio"
            }],


            'CHA': [{
                "id": "me6",
                "text": "Charango",
                "highlights": "avanzado"
            }, {
                "id": "me7",
                "text": "Charango",
                "highlights": "basico"
            }, {
                "id": "me8",
                "text": "Charango",
                "highlights": "intermedio"
            }],

            'CHARANGO': [{
                "id": "me6",
                "text": "Charango",
                "highlights": "avanzado"
            }, {
                "id": "me7",
                "text": "Charango",
                "highlights": "basico"
            }, {
                "id": "me8",
                "text": "Charango",
                "highlights": "intermedio"
            }],


            'CHI': [{
                "id": "me9",
                "text": "Chino",
                "highlights": "avanzado"
            }, {
                "id": "mf0",
                "text": "Chino",
                "highlights": "basico"
            }, {
                "id": "mf1",
                "text": "Chino",
                "highlights": "intermedio"
            }],


            'CHINO': [{
                "id": "me9",
                "text": "Chino",
                "highlights": "avanzado"
            }, {
                "id": "mf0",
                "text": "Chino",
                "highlights": "basico"
            }, {
                "id": "mf1",
                "text": "Chino",
                "highlights": "intermedio"
            }],


            'CI': [{
                "id": "mf2",
                "text": "Ciencia política",
                "highlights": "universitario"
            }, {
                "id": "mf3",
                "text": "Ciencias naturales",
                "highlights": "primaria"
            }, {
                "id": "mf4",
                "text": "Ciencias naturales",
                "highlights": "primaria"
            }, {
                "id": "mf5",
                "text": "Ciencias naturales",
                "highlights": "secundario"
            }, {
                "id": "mf6",
                "text": "Ciencias sociales",
                "highlights": "primaria"
            }, {
                "id": "mf7",
                "text": "Ciencias sociales",
                "highlights": "primaria"
            }, {
                "id": "mf8",
                "text": "Ciencias sociales",
                "highlights": "secundario"
            }],

            'CIEN': [{
                "id": "mf2",
                "text": "Ciencia política",
                "highlights": "universitario"
            }, {
                "id": "mf3",
                "text": "Ciencias naturales",
                "highlights": "primaria"
            }, {
                "id": "mf4",
                "text": "Ciencias naturales",
                "highlights": "primaria"
            }, {
                "id": "mf5",
                "text": "Ciencias naturales",
                "highlights": "secundario"
            }, {
                "id": "mf6",
                "text": "Ciencias sociales",
                "highlights": "primaria"
            }, {
                "id": "mf7",
                "text": "Ciencias sociales",
                "highlights": "primaria"
            }, {
                "id": "mf8",
                "text": "Ciencias sociales",
                "highlights": "secundario"
            }],

            'CIENCIA': [{
                "id": "mf2",
                "text": "Ciencia política",
                "highlights": "universitario"
            }, {
                "id": "mf3",
                "text": "Ciencias naturales",
                "highlights": "primaria"
            }, {
                "id": "mf4",
                "text": "Ciencias naturales",
                "highlights": "primaria"
            }, {
                "id": "mf5",
                "text": "Ciencias naturales",
                "highlights": "secundario"
            }, {
                "id": "mf6",
                "text": "Ciencias sociales",
                "highlights": "primaria"
            }, {
                "id": "mf7",
                "text": "Ciencias sociales",
                "highlights": "primaria"
            }, {
                "id": "mf8",
                "text": "Ciencias sociales",
                "highlights": "secundario"
            }],

            'CIENCIAS': [{
                "id": "mf2",
                "text": "Ciencia política",
                "highlights": "universitario"
            }, {
                "id": "mf3",
                "text": "Ciencias naturales",
                "highlights": "primaria"
            }, {
                "id": "mf4",
                "text": "Ciencias naturales",
                "highlights": "primaria"
            }, {
                "id": "mf5",
                "text": "Ciencias naturales",
                "highlights": "secundario"
            }, {
                "id": "mf6",
                "text": "Ciencias sociales",
                "highlights": "primaria"
            }, {
                "id": "mf7",
                "text": "Ciencias sociales",
                "highlights": "primaria"
            }, {
                "id": "mf8",
                "text": "Ciencias sociales",
                "highlights": "secundario"
            }],


            'CIENCIAS POLITICA': [{
                "id": "mf2",
                "text": "Ciencia política",
                "highlights": "secundario"
            }],


            'CIENCIAS NATURALES': [{
                "id": "mf3",
                "text": "Ciencias naturales",
                "highlights": "primaria"
            }, {
                "id": "mf4",
                "text": "Ciencias naturales",
                "highlights": "primaria"
            }, {
                "id": "mf5",
                "text": "Ciencias naturales",
                "highlights": "secundario"
            }],

            'CIENCIAS SOCIALES': [{
                "id": "mf6",
                "text": "Ciencias sociales",
                "highlights": "primaria"
            }, {
                "id": "mf7",
                "text": "Ciencias sociales",
                "highlights": "primaria"
            }, {
                "id": "mf8",
                "text": "Ciencias sociales",
                "highlights": "secundario"
            }],

            'CO': [{
                "id": "mf8",
                "text": "Computación",
                "highlights": "universitario"
            }, {
                "id": "mf9",
                "text": "Comunicación, cultura y sociedad",
                "highlights": "secundario"
            }, {
                "id": "mg0",
                "text": "Comunicación I",
                "highlights": "universitario"
            }, {
                "id": "mg1",
                "text": "Conceptos básicos de química",
                "highlights": "universitario"
            }, {
                "id": "mg2",
                "text": "Conocimiento de materiales",
                "highlights": "secundario"
            }, {
                "id": "mg3",
                "text": "Conocimiento de materiales",
                "highlights": "universitario"
            }, {
                "id": "mg4",
                "text": "Construcción de ciudadanía",
                "highlights": "secundario"
            }, {
                "id": "mg5",
                "text": "Contabilidad básica",
                "highlights": "universitario"

            }, {
                "id": "mg6",
                "text": "Contabilidad I",
                "highlights": "universitario"

            }, {
                "id": "mg7",
                "text": "Contabilidad II",
                "highlights": "universitario"

            }, {
                "id": "mg8",
                "text": "Contabilidad III",
                "highlights": "universitario"

            }, {
                "id": "mg9",
                "text": "Contabilidad patrimonial y de gestión",
                "highlights": "secundario"

            }, {
                "id": "mh0",
                "text": "Costos",
                "highlights": "secundario"

            }],


            'COM': [{
                "id": "mf8",
                "text": "Computación",
                "highlights": "universitario"
            }, {
                "id": "mf9",
                "text": "Comunicación, cultura y sociedad",
                "highlights": "secundario"
            }, {
                "id": "mg0",
                "text": "Comunicación I",
                "highlights": "universitario"
            }],

            'COMP': [{
                "id": "mf8",
                "text": "Computación",
                "highlights": "universitario"
            }],


            'COMPUTA': [{
                "id": "mf8",
                "text": "Computación",
                "highlights": "universitario"
            }],

            'COMPUTAACION': [{
                "id": "mf8",
                "text": "Computación universitario",
                "highlights": "universitario"
            }],

            'COMU': [{
                "id": "mf9",
                "text": "Comunicación, cultura y sociedad",
                "highlights": "secundario"
            }, {
                "id": "mg0",
                "text": "Comunicación I",
                "highlights": "universitario"
            }],

            'COMUNI': [{
                "id": "mf9",
                "text": "Comunicación, cultura y sociedad ",
                "highlights": "secundario"
            }, {
                "id": "mg0",
                "text": "Comunicación I",
                "highlights": "universitario"
            }],

            'COMUNICACION': [{
                "id": "mf9",
                "text": "Comunicación, cultura y sociedad",
                "highlights": "secundario"
            }, {
                "id": "mg0",
                "text": "Comunicación I",
                "highlights": "universitario"
            }],


            'CON': [{
                "id": "mg1",
                "text": "Conceptos básicos de química",
                "highlights": "universitario"
            }, {
                "id": "mg2",
                "text": "Conocimiento de materiales",
                "highlights": "secundario"
            }, {
                "id": "mg3",
                "text": "Conocimiento de materiales",
                "highlights": "universitario"
            }, {
                "id": "mg4",
                "text": "Construcción de ciudadanía",
                "highlights": "secundario"
            }, {
                "id": "mg5",
                "text": "Contabilidad básica",
                "highlights": "universitario"

            }, {
                "id": "mg6",
                "text": "Contabilidad I ",
                "highlights": "universitario"

            }, {
                "id": "mg7",
                "text": "Contabilidad II",
                "highlights": "universitario"

            }, {
                "id": "mg8",
                "text": "Contabilidad III",
                "highlights": "universitario"

            }, {
                "id": "mg9",
                "text": "Contabilidad patrimonial y de gestión",
                "highlights": "secundario"

            }, {
                "id": "mh0",
                "text": "Costos",
                "highlights": "secundario"

            }],

            'CONC': [{
                "id": "mg1",
                "text": "Conceptos básicos de química",
                "highlights": "universitario"
            }],

            'CONCEPTOS': [{
                "id": "mg1",
                "text": "Conceptos básicos de química",
                "highlights": "universitario"
            }],

            'CONCEPTOS BASICOS': [{
                "id": "mg1",
                "text": "Conceptos básicos de química",
                "highlights": "universitario"
            }],

            'QUIMICA': [{
                "id": "mg1",
                "text": "Conceptos básicos de química",
                "highlights": "universitario"
            }],


            'CONO': [{
                "id": "mg2",
                "text": "Conocimiento de materiales",
                "highlights": "secundario"
            }, {
                "id": "mg3",
                "text": "Conocimiento de materiales",
                "highlights": "universitario"
            }],

            'CONOCIMIENTO': [{
                "id": "mg2",
                "text": "Conocimiento de materiales",
                "highlights": "secundario"
            }, {
                "id": "mg3",
                "text": "Conocimiento de materiales",
                "highlights": "universitario"
            }],

            'MATERIAS': [{
                "id": "mg2",
                "text": "Conocimiento de materiales",
                "highlights": "secundario"
            }, {
                "id": "mg3",
                "text": "Conocimiento de materiales",
                "highlights": "universitario"
            }],


            'CONT': [{
                "id": "mg5",
                "text": "Contabilidad básica",
                "highlights": "universitario"

            }, {
                "id": "mg6",
                "text": "Contabilidad I",
                "highlights": "universitario"

            }, {
                "id": "mg7",
                "text": "Contabilidad II",
                "highlights": "universitario"

            }, {
                "id": "mg8",
                "text": "Contabilidad III",
                "highlights": "universitario"

            }, {
                "id": "mg9",
                "text": "Contabilidad patrimonial y de gestión",
                "highlights": "secundario"

            }],

            'CONTA': [{
                "id": "mg5",
                "text": "Contabilidad básica",
                "highlights": "universitario"

            }, {
                "id": "mg6",
                "text": "Contabilidad I",
                "highlights": "universitario"

            }, {
                "id": "mg7",
                "text": "Contabilidad II",
                "highlights": "universitario"

            }, {
                "id": "mg8",
                "text": "Contabilidad III",
                "highlights": "universitario"

            }, {
                "id": "mg9",
                "text": "Contabilidad patrimonial y de gestión",
                "highlights": "secundario"

            }],


            'CONTABILIDAD': [{
                "id": "mg5",
                "text": "Contabilidad básica",
                "highlights": "universitario"

            }, {
                "id": "mg6",
                "text": "Contabilidad I",
                "highlights": "universitario"

            }, {
                "id": "mg7",
                "text": "Contabilidad II",
                "highlights": "universitario"

            }, {
                "id": "mg8",
                "text": "Contabilidad III",
                "highlights": "universitario"

            }, {
                "id": "mg9",
                "text": "Contabilidad patrimonial y de gestión",
                "highlights": "secundario"

            }],


            'COS': [{
                "id": "mh0",
                "text": "Costos",
                "highlights": "secundario"

            }],

            'COSTOS': [{
                "id": "mh0",
                "text": "Costos",
                "highlights": "secundario"

            }],


            'CRE': [{
                "id": "mh1",
                "text": "Crecimiento y desarrollo",
                "highlights": "secundario"
            }, {
                "id": "mh2",
                "text": "Defensa del consumidor y del usuario",
                "highlights": "secundario"
            }],


            'CRECIMI': [{
                "id": "mh1",
                "text": "Crecimiento y desarrollo",
                "highlights": "secundario"
            }],


            'CRECIMIENTO': [{
                "id": "mh1",
                "text": "Crecimiento y desarrollo",
                "highlights": "secundario"
            }],



            'DESARROLLO': [{
                "id": "mh1",
                "text": "Crecimiento y desarrollo",
                "highlights": "universitario"
            }, {
                "id": "mh2",
                "text": "Defensa del consumidor y del usuario",
                "highlights": "universitario"
            }],

            'DE': [{
                    "id": "mh2",
                    "text": "Defensa del consumidor y del usuario",
                    "highlights": "universitario"
                },

                {
                    "id": "mh3",
                    "text": "Deontología I",
                    "highlights": "universitario"
                }, {
                    "id": "mh4",
                    "text": "Derecho administrativo",
                    "highlights": "universitario"
                }, {
                    "id": "mh5",
                    "text": "Derecho administrativo I",
                    "highlights": "universitario"
                }, {
                    "id": "mh6",
                    "text": "Derecho administrativo II",
                    "highlights": "universitario"
                }, {
                    "id": "mh7",
                    "text": "Derecho civil I",
                    "highlights": "universitario"
                }, {
                    "id": "mh8",
                    "text": "Derecho civil III",
                    "highlights": "universitario"
                }, {
                    "id": "mh9",
                    "text": "Derecho comercial I",
                    "highlights": "universitario"
                }, {
                    "id": "mi0",
                    "text": "Derecho constitucional",
                    "highlights": "universitario"
                }, {
                    "id": "mi1",
                    "text": "Derecho constitucional y administrativo",
                    "highlights": "universitario"
                }, {
                    "id": "mi2",
                    "text": "Derecho de la insolvencia (concursos y quiebras)",
                    "highlights": "universitario"
                }, {
                    "id": "mi3",
                    "text": "Derecho de la navegación, transporte y comunicaciones",
                    "highlights": "universitario"
                }, {
                    "id": "mi4",
                    "text": "Derecho de las obligaciones",
                    "highlights": "universitario"
                }, {
                    "id": "mi5",
                    "text": "Derecho del trabajo",
                    "highlights": "universitario"
                }, {
                    "id": "mi6",
                    "text": "Derecho internacional privado",
                    "highlights": "universitario"
                }, {
                    "id": "mi7",
                    "text": "Derecho internacional público",
                    "highlights": "universitario"
                }, {
                    "id": "mi8",
                    "text": "Derecho penal I",
                    "highlights": "universitario"
                }, {
                    "id": "mi9",
                    "text": "Derecho penal II",
                    "highlights": "universitario"
                }, {
                    "id": "mj0",
                    "text": "Derecho privado VI familia y sucesiones",
                    "highlights": "universitario"
                }, {
                    "id": "mj1",
                    "text": "Derecho procesal civil",
                    "highlights": "universitario"
                }, {
                    "id": "mj2",
                    "text": "Derecho procesal constitucional",
                    "highlights": "universitario"
                }, {
                    "id": "mj3",
                    "text": "Derecho procesal I",
                    "highlights": "universitario"
                }, {
                    "id": "mj4",
                    "text": "Derecho tributario",
                    "highlights": "universitario"
                }, {
                    "id": "mj5",
                    "text": "Desarrollo de sistemas",
                    "highlights": "secundario"
                }
            ],

            'DEFEN': [{
                "id": "mh2",
                "text": "Defensa del consumidor y del usuario",
                "highlights": "universitario"
            }],

            'DEFENSA': [{
                "id": "mh2",
                "text": "Defensa del consumidor y del usuario",
                "highlights": "universitario"
            }],

            'DER': [

                {
                    "id": "mh4",
                    "text": "Derecho administrativo",
                    "highlights": "universitario"
                }, {
                    "id": "mh5",
                    "text": "Derecho administrativo I",
                    "highlights": "universitario"
                }, {
                    "id": "mh6",
                    "text": "Derecho administrativo II",
                    "highlights": "universitario"
                }, {
                    "id": "mh7",
                    "text": "Derecho civil I",
                    "highlights": "universitario"
                }, {
                    "id": "mh8",
                    "text": "Derecho civil III",
                    "highlights": "universitario"
                }, {
                    "id": "mh9",
                    "text": "Derecho comercial I",
                    "highlights": "universitario"
                }, {
                    "id": "mi0",
                    "text": "Derecho constitucional",
                    "highlights": "universitario"
                }, {
                    "id": "mi1",
                    "text": "Derecho constitucional y administrativo",
                    "highlights": "universitario"
                }, {
                    "id": "mi2",
                    "text": "Derecho de la insolvencia (concursos y quiebras)",
                    "highlights": "universitario"
                }, {
                    "id": "mi3",
                    "text": "Derecho de la navegación, transporte y comunicaciones",
                    "highlights": "universitario"
                }, {
                    "id": "mi4",
                    "text": "Derecho de las obligaciones",
                    "highlights": "universitario"
                }, {
                    "id": "mi5",
                    "text": "Derecho del trabajo",
                    "highlights": "universitario"
                }, {
                    "id": "mi6",
                    "text": "Derecho internacional privado",
                    "highlights": "universitario"
                }, {
                    "id": "mi7",
                    "text": "Derecho internacional público",
                    "highlights": "universitario"
                }, {
                    "id": "mi8",
                    "text": "Derecho penal I",
                    "highlights": "universitario"
                }, {
                    "id": "mi9",
                    "text": "Derecho penal II",
                    "highlights": "universitario"
                }, {
                    "id": "mj0",
                    "text": "Derecho privado VI familia y sucesiones",
                    "highlights": "universitario"
                }, {
                    "id": "mj1",
                    "text": "Derecho procesal civil",
                    "highlights": "universitario"
                }, {
                    "id": "mj2",
                    "text": "Derecho procesal constitucional",
                    "highlights": "universitario"
                }, {
                    "id": "mj3",
                    "text": "Derecho procesal I",
                    "highlights": "universitario"
                }, {
                    "id": "mj4",
                    "text": "Derecho tributario",
                    "highlights": "universitario"
                }, {
                    "id": "mj5",
                    "text": "Desarrollo de sistemas",
                    "highlights": "secundario"
                }
            ],

            'DERE': [{
                "id": "mh4",
                "text": "Derecho administrativo",
                "highlights": "universitario"
            }, {
                "id": "mh5",
                "text": "Derecho administrativo I",
                "highlights": "universitario"
            }, {
                "id": "mh6",
                "text": "Derecho administrativo II",
                "highlights": "universitario"
            }, {
                "id": "mh7",
                "text": "Derecho civil I",
                "highlights": "universitario"
            }, {
                "id": "mh8",
                "text": "Derecho civil III",
                "highlights": "universitario"
            }, {
                "id": "mh9",
                "text": "Derecho comercial I",
                "highlights": "universitario"
            }, {
                "id": "mi0",
                "text": "Derecho constitucional",
                "highlights": "universitario"
            }, {
                "id": "mi1",
                "text": "Derecho constitucional y administrativo",
                "highlights": "universitario"
            }, {
                "id": "mi2",
                "text": "Derecho de la insolvencia (concursos y quiebras)",
                "highlights": "universitario"
            }, {
                "id": "mi3",
                "text": "Derecho de la navegación, transporte y comunicaciones",
                "highlights": "universitario"
            }, {
                "id": "mi4",
                "text": "Derecho de las obligaciones",
                "highlights": "universitario"
            }, {
                "id": "mi5",
                "text": "Derecho del trabajo",
                "highlights": "universitario"
            }, {
                "id": "mi6",
                "text": "Derecho internacional privado",
                "highlights": "universitario"
            }, {
                "id": "mi7",
                "text": "Derecho internacional público",
                "highlights": "universitario"
            }, {
                "id": "mi8",
                "text": "Derecho penal I",
                "highlights": "universitario"
            }, {
                "id": "mi9",
                "text": "Derecho penal II",
                "highlights": "universitario"
            }, {
                "id": "mj0",
                "text": "Derecho privado VI familia y sucesiones",
                "highlights": "universitario"
            }, {
                "id": "mj1",
                "text": "Derecho procesal civil",
                "highlights": "universitario"
            }, {
                "id": "mj2",
                "text": "Derecho procesal constitucional",
                "highlights": "universitario"
            }, {
                "id": "mj3",
                "text": "Derecho procesal I",
                "highlights": "universitario"
            }, {
                "id": "mj4",
                "text": "Derecho tributario",
                "highlights": "universitario"
            }, {
                "id": "mj5",
                "text": "Desarrollo de sistemas",
                "highlights": "secundario"
            }],


            'DERECHO': [{
                "id": "mh4",
                "text": "Derecho administrativo",
                "highlights": "universitario"
            }, {
                "id": "mh5",
                "text": "Derecho administrativo I",
                "highlights": "universitario"
            }, {
                "id": "mh6",
                "text": "Derecho administrativo II",
                "highlights": "universitario"
            }, {
                "id": "mh7",
                "text": "Derecho civil I",
                "highlights": "universitario"
            }, {
                "id": "mh8",
                "text": "Derecho civil III",
                "highlights": "universitario"
            }, {
                "id": "mh9",
                "text": "Derecho comercial I",
                "highlights": "universitario"
            }, {
                "id": "mi0",
                "text": "Derecho constitucional",
                "highlights": "universitario"
            }, {
                "id": "mi1",
                "text": "Derecho constitucional y administrativo",
                "highlights": "universitario"
            }, {
                "id": "mi2",
                "text": "Derecho de la insolvencia (concursos y quiebras)",
                "highlights": "universitario"
            }, {
                "id": "mi3",
                "text": "Derecho de la navegación, transporte y comunicaciones",
                "highlights": "universitario"
            }, {
                "id": "mi4",
                "text": "Derecho de las obligaciones",
                "highlights": "universitario"
            }, {
                "id": "mi5",
                "text": "Derecho del trabajo",
                "highlights": "universitario"
            }, {
                "id": "mi6",
                "text": "Derecho internacional privado",
                "highlights": "universitario"
            }, {
                "id": "mi7",
                "text": "Derecho internacional público",
                "highlights": "universitario"
            }, {
                "id": "mi8",
                "text": "Derecho penal I",
                "highlights": "universitario"
            }, {
                "id": "mi9",
                "text": "Derecho penal II",
                "highlights": "universitario"
            }, {
                "id": "mj0",
                "text": "Derecho privado VI familia y sucesiones",
                "highlights": "universitario"
            }, {
                "id": "mj1",
                "text": "Derecho procesal civil",
                "highlights": "universitario"
            }, {
                "id": "mj2",
                "text": "Derecho procesal constitucional",
                "highlights": "universitario"
            }, {
                "id": "mj3",
                "text": "Derecho procesal I",
                "highlights": "universitario"
            }, {
                "id": "mj4",
                "text": "Derecho tributario",
                "highlights": "universitario"
            }, {
                "id": "mj5",
                "text": "Desarrollo de sistemas",
                "highlights": "secundario"
            }],

            'DI': [

                {
                    "id": "mk0",
                    "text": "Diseño de indumentaria y textil",
                    "highlights": "universitario"
                }, {
                    "id": "mk1",
                    "text": "Diseño I",
                    "highlights": "universitario"
                }, {
                    "id": "mk2",
                    "text": "Diseño industrial I",
                    "highlights": "universitario"
                }

            ],


            'DIS': [{
                    "id": "mk0",
                    "text": "Diseño de indumentaria y textil",
                    "highlights": "universitario"
                }, {
                    "id": "mk1",
                    "text": "Diseño I",
                    "highlights": "universitario"
                }, {
                    "id": "mk2",
                    "text": "Diseño industrial I",
                    "highlights": "universitario"
                }

            ],

            'DISEÑO': [

                {
                    "id": "mk0",
                    "text": "Diseño de indumentaria y textil",
                    "highlights": "universitario"
                }, {
                    "id": "mk1",
                    "text": "Diseño I",
                    "highlights": "universitario"
                }, {
                    "id": "mk2",
                    "text": "Diseño industrial I",
                    "highlights": "universitario"
                }

            ],


            'E': [

                {
                    "id": "mk3",
                    "text": "Ecología general",
                    "highlights": "universitario"

                }, {
                    "id": "mk4",
                    "text": "Econometría",
                    "highlights": "universitario"

                }, {
                    "id": "mvl",
                    "text": "Economía",
                    "highlights": "secundario"

                }, {
                    "id": "mk5",
                    "text": "Economía",
                    "highlights": "universitario"

                }, {
                    "id": "mk6",
                    "text": "Economía política",
                    "highlights": "secundario"

                }, {
                    "id": "mk7",
                    "text": "Economía política",
                    "highlights": "secundario"

                }, {
                    "id": "mk8",
                    "text": "Economía y desarrollo",
                    "highlights": "secundario"

                }, {
                    "id": "mk9",
                    "text": "Economía y gestión de las organizaciones",
                    "highlights": "secundario"

                }, {
                    "id": "ml0",
                    "text": "Educación artística",
                    "highlights": "secundario"

                }, {
                    "id": "ml1",
                    "text": "Educación artística",
                    "highlights": "secundario"

                }, {
                    "id": "ml2",
                    "text": "Electromagnetismo",
                    "highlights": "universitario"

                }, {
                    "id": "ml3",
                    "text": "Elementos de álgebra y de geometría",
                    "highlights": "universitario"

                }, {
                    "id": "ml4",
                    "text": "Elementos de contabilidad",
                    "highlights": "universitario"

                }, {
                    "id": "ml5",
                    "text": "Elementos de micro y macroeconomía",
                    "highlights": "secundario"

                }, {
                    "id": "ml6",
                    "text": "Elementos técnicos de la música I",
                    "highlights": "tertiary",

                }, {
                    "id": "ml7",
                    "text": "Elementos técnicos de la música II",
                    "highlights": "tertiary",

                }, {
                    "id": "ml8",
                    "text": "Elementos técnicos de la música III",
                    "highlights": "tertiary",

                }, {
                    "id": "ml9",
                    "text": "El ser humano y su medio",
                    "highlights": "universitario"

                }, {
                    "id": "mn0",
                    "text": "Emprendedorismo",
                    "highlights": "secundario"

                }, {
                    "id": "mn1",
                    "text": "Enfermería en cuidados críticos",
                    "highlights": "universitario"

                }, {
                    "id": "mn2",
                    "text": "Enfermería en salud colectiva I",
                    "highlights": "universitario"

                }, {
                    "id": "mn3",
                    "text": "Enfermería en salud colectiva II",
                    "highlights": "universitario"

                }, {
                    "id": "mn4",
                    "text": "Enfermería en salud pública I",
                    "highlights": "universitario"

                }, {
                    "id": "mn5",
                    "text": "Enfermería familiar I",
                    "highlights": "universitario"

                }, {
                    "id": "mn6",
                    "text": "Enfermería familiar II",
                    "highlights": "universitario"

                }, {
                    "id": "mn7",
                    "text": "Enfermería familiar III",
                    "highlights": "universitario"

                }, {
                    "id": "mn8",
                    "text": "Enfermería familiar IV",
                    "highlights": "universitario"

                }, {
                    "id": "mn9",
                    "text": "Enfermería: fundamentos, prácticas y tendencias I",
                    "highlights": "universitario"

                }, {
                    "id": "mo0",
                    "text": "Enfermería: fundamentos, prácticas y tendencias II",
                    "highlights": "universitario"

                }, {
                    "id": "mo1",
                    "text": "Enfermería médica I",
                    "highlights": "universitario"

                }, {
                    "id": "mo2",
                    "text": "Epistemología y metodología de la investigación",
                    "highlights": "universitario"

                }, {
                    "id": "mo3",
                    "text": "Español para extranjeros",
                    "highlights": "avanzado"

                }, {
                    "id": "mo3",
                    "text": "Español para extranjeros",
                    "highlights": "basico"

                }, {
                    "id": "mo4",
                    "text": "Español para extranjeros",
                    "highlights": "intermedio"

                }, {
                    "id": "mo5",
                    "text": "Estabilidad I",
                    "highlights": "universitario"

                }, {
                    "id": "mo6",
                    "text": "Estabilidad II",
                    "highlights": "universitario"

                }, {
                    "id": "mo7",
                    "text": "Estabilidad III",
                    "highlights": "universitario"

                }, {
                    "id": "mo8",
                    "text": "Estadística",
                    "highlights": "universitario"

                }, {
                    "id": "mo9",
                    "text": "Estadística B",
                    "highlights": "universitario"

                }, {
                    "id": "mu1",
                    "text": "Estadística general",
                    "highlights": "universitario"

                }, {
                    "id": "mu2",
                    "text": "Estadística I",
                    "highlights": "universitario"

                }, {
                    "id": "mu3",
                    "text": "Estadística II",
                    "highlights": "universitario"

                }, {
                    "id": "mu4",
                    "text": "Estructuras",
                    "highlights": "secundario"

                }, {
                    "id": "mu5",
                    "text": "Estructura y funcionamiento de los sistemas informáticos I",
                    "highlights": "secundario"

                }, {
                    "id": "mu6",
                    "text": "Estructura y funcionamiento de los sistemas informáticos II",
                    "highlights": "secundario"

                }, {
                    "id": "mu7",
                    "text": "Estructura y función del cuerpo humano I",
                    "highlights": "universitario"

                }, {
                    "id": "mu8",
                    "text": "Estructura y función del cuerpo humano II",
                    "highlights": "universitario"

                }

            ],


            'EC': [

                {
                    "id": "mk3",
                    "text": "Ecología general",
                    "highlights": "universitario"

                }, {
                    "id": "mk4",
                    "text": "Econometría",
                    "highlights": "universitario"

                }, {
                    "id": "mk4",
                    "text": "Economía",
                    "highlights": "secundario"

                }, {
                    "id": "mk5",
                    "text": "Economía",
                    "highlights": "universitario"

                }, {
                    "id": "mk6",
                    "text": "Economía política",
                    "highlights": "secundario"

                }, {
                    "id": "mk8",
                    "text": "Economía y desarrollo",
                    "highlights": "secundario"

                }, {
                    "id": "mk9",
                    "text": "Economía y gestión de las organizaciones",
                    "highlights": "secundario"

                }

            ],


            'ECO': [

                {
                    "id": "mk3",
                    "text": "Ecología general",
                    "highlights": "universitario"

                }, {
                    "id": "mk4",
                    "text": "Econometría",
                    "highlights": "universitario"

                }, {
                    "id": "mk4",
                    "text": "Economía",
                    "highlights": "secundario"

                }, {
                    "id": "mk5",
                    "text": "Economía",
                    "highlights": "universitario"

                }, {
                    "id": "mk6",
                    "text": "Economía política",
                    "highlights": "secundario"

                }, {
                    "id": "mk7",
                    "text": "Economía política",
                    "highlights": "secundario"

                }, {
                    "id": "mk8",
                    "text": "Economía y desarrollo",
                    "highlights": "secundario"

                }, {
                    "id": "mk9",
                    "text": "Economía y gestión de las organizaciones",
                    "highlights": "secundario"

                }

            ],


            'ECOL': [

                {
                    "id": "mk3",
                    "text": "Ecología general",
                    "highlights": "universitario"

                }
            ],

            'ECOLOGIA': [

                {
                    "id": "mk3",
                    "text": "Ecología general",
                    "highlights": "universitario"

                }
            ],


            'ECON': [

                {
                    "id": "mk4",
                    "text": "Econometría",
                    "highlights": "universitario"

                }, {
                    "id": "mk4",
                    "text": "Economía",
                    "highlights": "secundario"

                }, {
                    "id": "mk5",
                    "text": "Economía",
                    "highlights": "universitario"

                }, {
                    "id": "mk6",
                    "text": "Economía política",
                    "highlights": "secundario"

                }, {
                    "id": "mk7",
                    "text": "Economía política",
                    "highlights": "secundario"

                }, {
                    "id": "mk8",
                    "text": "Economía y desarrollo",
                    "highlights": "secundario"

                }, {
                    "id": "mk9",
                    "text": "Economía y gestión de las organizaciones",
                    "highlights": "secundario"

                }

            ],

            'ECONOME': [

                {
                    "id": "mk4",
                    "text": "Econometría",
                    "highlights": "universitario"

                }
            ],

            'ECONOMETRIA': [

                {
                    "id": "mk4",
                    "text": "Econometría",
                    "highlights": "universitario"

                }
            ],


            'ECONOMIA': [

                {
                    "id": "mk4",
                    "text": "Econometría",
                    "highlights": "universitario"

                }, {
                    "id": "mk4",
                    "text": "Economía",
                    "highlights": "secundario"

                }, {
                    "id": "mk5",
                    "text": "Economía",
                    "highlights": "universitario"

                }, {
                    "id": "mk6",
                    "text": "Economía política",
                    "highlights": "secundario"

                }, {
                    "id": "mk7",
                    "text": "Economía política",
                    "highlights": "secundario"

                }, {
                    "id": "mk8",
                    "text": "Economía y desarrollo",
                    "highlights": "secundario"

                }, {
                    "id": "mk9",
                    "text": "Economía y gestión de las organizaciones",
                    "highlights": "secundario"

                }

            ],


            'ED': [


                {
                    "id": "ml0",
                    "text": "Educación artística",
                    "highlights": "secundario"

                }
            ],


            'EDUC': [


                {
                    "id": "ml0",
                    "text": "Educación artística",
                    "highlights": "secundario"

                }
            ],


            'EDUCACION': [


                {
                    "id": "ml0",
                    "text": "Educación artística",
                    "highlights": "secundario"

                }
            ],


            'EL': [


                {
                    "id": "ml2",
                    "text": "Electromagnetismo",
                    "highlights": "universitario"

                }, {
                    "id": "ml3",
                    "text": "Elementos de álgebra y de geometría",
                    "highlights": "universitario"

                }, {
                    "id": "ml4",
                    "text": "Elementos de contabilidad",
                    "highlights": "universitario"

                }, {
                    "id": "ml5",
                    "text": "Elementos de micro y macroeconomía",
                    "highlights": "secundario"

                }, {
                    "id": "ml6",
                    "text": "Elementos técnicos de la música I",
                    "highlights": "tertiary",

                }, {
                    "id": "ml7",
                    "text": "Elementos técnicos de la música II",
                    "highlights": "tertiary",

                }, {
                    "id": "ml8",
                    "text": "Elementos técnicos de la música III",
                    "highlights": "tertiary",

                }, {
                    "id": "ml9",
                    "text": "El ser humano y su medio",
                    "highlights": "universitario"

                }
            ],

            'ELE': [


                {
                    "id": "ml2",
                    "text": "Electromagnetismo",
                    "highlights": "universitario"

                }, {
                    "id": "ml3",
                    "text": "Elementos de álgebra y de geometría",
                    "highlights": "universitario"

                }, {
                    "id": "ml4",
                    "text": "Elementos de contabilidad",
                    "highlights": "universitario"

                }, {
                    "id": "ml5",
                    "text": "Elementos de micro y macroeconomía",
                    "highlights": "secundario"

                }, {
                    "id": "ml6",
                    "text": "Elementos técnicos de la música I",
                    "highlights": "tertiary",

                }, {
                    "id": "ml7",
                    "text": "Elementos técnicos de la música II",
                    "highlights": "tertiary",

                }, {
                    "id": "ml8",
                    "text": "Elementos técnicos de la música III",
                    "highlights": "tertiary",

                }
            ],


            'ELEMEN': [


                {
                    "id": "ml2",
                    "text": "Electromagnetismo",
                    "highlights": "universitario"

                }, {
                    "id": "ml3",
                    "text": "Elementos de álgebra y de geometría",
                    "highlights": "universitario"

                }, {
                    "id": "ml4",
                    "text": "Elementos de contabilidad",
                    "highlights": "universitario"

                }, {
                    "id": "ml5",
                    "text": "Elementos de micro y macroeconomía",
                    "highlights": "secundario"

                }, {
                    "id": "ml6",
                    "text": "Elementos técnicos de la música I",
                    "highlights": "tertiary",

                }, {
                    "id": "ml7",
                    "text": "Elementos técnicos de la música II",
                    "highlights": "tertiary",

                }, {
                    "id": "ml8",
                    "text": "Elementos técnicos de la música III",
                    "highlights": "tertiary",

                }
            ],

            'ELEMENENTOS': [


                {
                    "id": "ml2",
                    "text": "Electromagnetismo",
                    "highlights": "universitario"

                }, {
                    "id": "ml3",
                    "text": "Elementos de álgebra y de geometría",
                    "highlights": "universitario"

                }, {
                    "id": "ml4",
                    "text": "Elementos de contabilidad",
                    "highlights": "universitario"

                }, {
                    "id": "ml5",
                    "text": "Elementos de micro y macroeconomía",
                    "highlights": "secundario"

                }, {
                    "id": "ml6",
                    "text": "Elementos técnicos de la música I",
                    "highlights": "tertiary",

                }, {
                    "id": "ml7",
                    "text": "Elementos técnicos de la música II",
                    "highlights": "tertiary",

                }, {
                    "id": "ml8",
                    "text": "Elementos técnicos de la música III",
                    "highlights": "tertiary",

                }
            ],



            'ALGEBRA': [{
                "id": "ml3",
                "text": "Elementos de álgebra y de geometría",
                "highlights": "universitario"

            }, {
                "id": "ml4",
                "text": "Elementos de contabilidad",
                "highlights": "universitario"

            }],


            'GEOMETRIA': [{
                "id": "ml3",
                "text": "Elementos de álgebra y de geometría",
                "highlights": "universitario"

            }, {
                "id": "ml4",
                "text": "Elementos de contabilidad",
                "highlights": "universitario"

            }],

            'CONTABILIDAD': [{
                "id": "ml4",
                "text": "Elementos de contabilidad",
                "highlights": "universitario"

            }],



            'EL S': [


                {
                    "id": "ml9",
                    "text": "El ser humano y su medio",
                    "highlights": "universitario"

                }
            ],

            'EL SER HUMANO': [


                {
                    "id": "ml9",
                    "text": "El ser humano y su medio",
                    "highlights": "universitario"

                }
            ],

            'HUMANO': [


                {
                    "id": "ml9",
                    "text": "El ser humano y su medio",
                    "highlights": "universitario"

                }
            ],


            'EM': [

                {
                    "id": "mn0",
                    "text": "Emprendedorismo",
                    "highlights": "secundario"

                }
            ],

            'EMP': [

                {
                    "id": "mn0",
                    "text": "Emprendedorismo",
                    "highlights": "secundario"

                }
            ],

            'EMPRENDIE': [

                {
                    "id": "mn0",
                    "text": "Emprendedorismo",
                    "highlights": "secundario"

                }
            ],

            'EMPRENDEDORISMO': [

                {
                    "id": "mn0",
                    "text": "Emprendedorismo",
                    "highlights": "secundario"

                }
            ],

            'EN': [

                {
                    "id": "mn1",
                    "text": "Enfermería en cuidados críticos",
                    "highlights": "universitario"

                }, {
                    "id": "mn2",
                    "text": "Enfermería en salud colectiva I",
                    "highlights": "universitario"

                }, {
                    "id": "mn3",
                    "text": "Enfermería en salud colectiva II",
                    "highlights": "universitario"

                }, {
                    "id": "mn4",
                    "text": "Enfermería en salud pública I",
                    "highlights": "universitario"

                }, {
                    "id": "mn5",
                    "text": "Enfermería familiar I",
                    "highlights": "universitario"

                }, {
                    "id": "mn6",
                    "text": "Enfermería familiar II",
                    "highlights": "universitario"

                }, {
                    "id": "mn7",
                    "text": "Enfermería familiar III",
                    "highlights": "universitario"

                }, {
                    "id": "mn8",
                    "text": "Enfermería familiar IV",
                    "highlights": "universitario"

                }, {
                    "id": "mn9",
                    "text": "Enfermería: fundamentos, prácticas y tendencias I",
                    "highlights": "universitario"

                }, {
                    "id": "mo0",
                    "text": "Enfermería: fundamentos, prácticas y tendencias II",
                    "highlights": "universitario"

                }, {
                    "id": "mo1",
                    "text": "Enfermería médica I",
                    "highlights": "universitario"

                }
            ],

            'ENFER': [

                {
                    "id": "mn1",
                    "text": "Enfermería en cuidados críticos",
                    "highlights": "universitario"

                }, {
                    "id": "mn2",
                    "text": "Enfermería en salud colectiva I",
                    "highlights": "universitario"

                }, {
                    "id": "mn3",
                    "text": "Enfermería en salud colectiva II",
                    "highlights": "universitario"

                }, {
                    "id": "mn4",
                    "text": "Enfermería en salud pública I",
                    "highlights": "universitario"

                }, {
                    "id": "mn5",
                    "text": "Enfermería familiar I",
                    "highlights": "universitario"

                }, {
                    "id": "mn6",
                    "text": "Enfermería familiar II",
                    "highlights": "universitario"

                }, {
                    "id": "mn7",
                    "text": "Enfermería familiar III",
                    "highlights": "universitario"

                }, {
                    "id": "mn8",
                    "text": "Enfermería familiar IV",
                    "highlights": "universitario"

                }, {
                    "id": "mn9",
                    "text": "Enfermería: fundamentos, prácticas y tendencias I",
                    "highlights": "universitario"

                }, {
                    "id": "mo0",
                    "text": "Enfermería: fundamentos, prácticas y tendencias II",
                    "highlights": "universitario"

                }, {
                    "id": "mo1",
                    "text": "Enfermería médica I",
                    "highlights": "universitario"

                }
            ],

            'ENFERMERIA': [

                {
                    "id": "mn1",
                    "text": "Enfermería en cuidados críticos",
                    "highlights": "universitario"

                }, {
                    "id": "mn2",
                    "text": "Enfermería en salud colectiva I",
                    "highlights": "universitario"

                }, {
                    "id": "mn3",
                    "text": "Enfermería en salud colectiva II",
                    "highlights": "universitario"

                }, {
                    "id": "mn4",
                    "text": "Enfermería en salud pública I",
                    "highlights": "universitario"

                }, {
                    "id": "mn5",
                    "text": "Enfermería familiar I",
                    "highlights": "universitario"

                }, {
                    "id": "mn6",
                    "text": "Enfermería familiar II",
                    "highlights": "universitario"

                }, {
                    "id": "mn7",
                    "text": "Enfermería familiar III",
                    "highlights": "universitario"

                }, {
                    "id": "mn8",
                    "text": "Enfermería familiar IV",
                    "highlights": "universitario"

                }, {
                    "id": "mn9",
                    "text": "Enfermería: fundamentos, prácticas y tendencias I",
                    "highlights": "universitario"

                }, {
                    "id": "mo0",
                    "text": "Enfermería: fundamentos, prácticas y tendencias II",
                    "highlights": "universitario"

                }, {
                    "id": "mo1",
                    "text": "Enfermería médica I",
                    "highlights": "universitario"

                }
            ],

            'ET': [

                {
                    "id": "mu9",
                    "text": "Ética y ciudadanía",
                    "highlights": "secundario"

                }
            ],


            'ETICA': [

                {
                    "id": "mu9",
                    "text": "Ética y ciudadanía",
                    "highlights": "secundario"

                }
            ],




            'EP': [

                {
                    "id": "mo2",
                    "text": "Epistemología y metodología de la investigación",
                    "highlights": "universitario"

                }
            ],

            'EPIS': [

                {
                    "id": "mo2",
                    "text": "Epistemología y metodología de la investigación",
                    "highlights": "universitario"

                }
            ],

            'EPISTEMOLOGIA': [

                {
                    "id": "mo2",
                    "text": "Epistemología y metodología de la investigación",
                    "highlights": "universitario"

                }
            ],


            'ES': [

                {
                    "id": "mo3",
                    "text": "Español para extranjeros",
                    "highlights": "avanzado"

                }, {
                    "id": "mf9",
                    "text": "Español para extranjeros",
                    "highlights": "basico"

                }, {
                    "id": "mo4",
                    "text": "Español para extranjeros",
                    "highlights": "intermedio"

                }, {
                    "id": "mo5",
                    "text": "Estabilidad I",
                    "highlights": "universitario"

                }, {
                    "id": "mo6",
                    "text": "Estabilidad II",
                    "highlights": "universitario"

                }, {
                    "id": "mo7",
                    "text": "Estabilidad III",
                    "highlights": "universitario"

                }, {
                    "id": "mo8",
                    "text": "Estadística",
                    "highlights": "universitario"

                }, {
                    "id": "mo9",
                    "text": "Estadística B",
                    "highlights": "universitario"

                }, {
                    "id": "mu1",
                    "text": "Estadística general",
                    "highlights": "universitario"

                }, {
                    "id": "mu2",
                    "text": "Estadística I",
                    "highlights": "universitario"

                }, {
                    "id": "mu3",
                    "text": "Estadística II",
                    "highlights": "universitario"

                }, {
                    "id": "mu4",
                    "text": "Estructuras",
                    "highlights": "secundario"

                }, {
                    "id": "mu5",
                    "text": "Estructura y funcionamiento de los sistemas informáticos I",
                    "highlights": "secundario"

                }, {
                    "id": "mu6",
                    "text": "Estructura y funcionamiento de los sistemas informáticos II",
                    "highlights": "secundario"

                }, {
                    "id": "mu7",
                    "text": "Estructura y función del cuerpo humano I",
                    "highlights": "universitario"

                }, {
                    "id": "mu8",
                    "text": "Estructura y función del cuerpo humano II",
                    "highlights": "universitario"

                }
            ],


            'ESP': [

                {
                    "id": "mo3",
                    "text": "Español para extranjeros",
                    "highlights": "avanzado"

                }, {
                    "id": "mo3",
                    "text": "Español para extranjeros",
                    "highlights": "basico"

                }, {
                    "id": "mo4",
                    "text": "Español para extranjeros",
                    "highlights": "intermedio"

                }
            ],

            'ESPAÑOL': [

                {
                    "id": "mo3",
                    "text": "Español para extranjeros",
                    "highlights": "avanzado"

                }, {
                    "id": "mo3",
                    "text": "Español para extranjeros",
                    "highlights": "basico"

                }, {
                    "id": "mo4",
                    "text": "Español para extranjeros",
                    "highlights": "intermedio"

                }
            ],

            'ESTA': [

                {
                    "id": "mo5",
                    "text": "Estabilidad I",
                    "highlights": "universitario"

                }, {
                    "id": "mo6",
                    "text": "Estabilidad II",
                    "highlights": "universitario"

                }, {
                    "id": "mo7",
                    "text": "Estabilidad III",
                    "highlights": "universitario"

                }, {
                    "id": "mo8",
                    "text": "Estadística",
                    "highlights": "universitario"

                }, {
                    "id": "mo9",
                    "text": "Estadística B",
                    "highlights": "universitario"

                }, {
                    "id": "mu1",
                    "text": "Estadística general",
                    "highlights": "universitario"

                }, {
                    "id": "mu2",
                    "text": "Estadística I",
                    "highlights": "universitario"

                }, {
                    "id": "mu3",
                    "text": "Estadística II",
                    "highlights": "universitario"

                }, {
                    "id": "mu4",
                    "text": "Estructuras",
                    "highlights": "secundario"

                }, {
                    "id": "mu5",
                    "text": "Estructura y funcionamiento de los sistemas informáticos I",
                    "highlights": "secundario"

                }, {
                    "id": "mu6",
                    "text": "Estructura y funcionamiento de los sistemas informáticos II",
                    "highlights": "secundario"

                }, {
                    "id": "mu7",
                    "text": "Estructura y función del cuerpo humano I",
                    "highlights": "universitario"

                }, {
                    "id": "mu8",
                    "text": "Estructura y función del cuerpo humano II",
                    "highlights": "universitario"

                }
            ],



            'ESTRU': [{
                "id": "mu4",
                "text": "Estructuras",
                "highlights": "secundario"

            }, {
                "id": "mu5",
                "text": "Estructura y funcionamiento de los sistemas informáticos I",
                "highlights": "secundario"

            }, {
                "id": "mu6",
                "text": "Estructura y funcionamiento de los sistemas informáticos II",
                "highlights": "secundario"

            }, {
                "id": "mu7",
                "text": "Estructura y función del cuerpo humano I",
                "highlights": "universitario"

            }, {
                "id": "mu8",
                "text": "Estructura y función del cuerpo humano II",
                "highlights": "universitario"

            }],

            'ESTRUCTURA': [{
                "id": "mu4",
                "text": "Estructuras",
                "highlights": "secundario"

            }, {
                "id": "mu5",
                "text": "Estructura y funcionamiento de los sistemas informáticos I",
                "highlights": "secundario"

            }, {
                "id": "mu6",
                "text": "Estructura y funcionamiento de los sistemas informáticos II",
                "highlights": "secundario"

            }, {
                "id": "mu7",
                "text": "Estructura y función del cuerpo humano I",
                "highlights": "universitario"

            }, {
                "id": "mu8",
                "text": "Estructura y función del cuerpo humano II",
                "highlights": "universitario"

            }],


            'F': [

                {
                    "id": "mp0",
                    "text": "Farmacología I",
                    "highlights": "universitario"

                }, {
                    "id": "mp1",
                    "text": "Farmacología y toxicología",
                    "highlights": "universitario"

                }, {
                    "id": "mp2",
                    "text": "Filosofía",
                    "highlights": "secundario"

                }, {
                    "id": "mp3",
                    "text": "Filosofía",
                    "highlights": "universitario"

                }, {
                    "id": "mp4",
                    "text": "First certificate in english - FCE",
                    "highlights": "avanzado"

                }, {
                    "id": "mp5",
                    "text": "Física",
                    "highlights": "secundario"

                }, {
                    "id": "mp6",
                    "text": "Física",
                    "highlights": "tertiary",

                }, {
                    "id": "mp7",
                    "text": "Física",
                    "highlights": "universitario"

                }, {
                    "id": "mp8",
                    "text": "Física aplicada",
                    "highlights": "secundario"

                }, {
                    "id": "mq0",
                    "text": "Física aplicada",
                    "highlights": "universitario"

                }, {
                    "id": "mq1",
                    "text": "Física aplicada a la arquitectura",
                    "highlights": "universitario"

                }, {
                    "id": "mq2",
                    "text": "Física biológica",
                    "highlights": "universitario"

                }, {
                    "id": "mq3",
                    "text": "Física clásica y moderna",
                    "highlights": "secundario"

                }, {
                    "id": "mq4",
                    "text": "Física e introducción a la biofísica",
                    "highlights": "universitario"

                }, {
                    "id": "mq5",
                    "text": "Física general",
                    "highlights": "universitario"

                }, {
                    "id": "mq6",
                    "text": "Física I",
                    "highlights": "universitario"

                }, {
                    "id": "mq7",
                    "text": "Física II",
                    "highlights": "universitario"

                }, {
                    "id": "mq8",
                    "text": "Fisicoquímica",
                    "highlights": "secundario"

                }, {
                    "id": "mq9",
                    "text": "Fisicoquímica general",
                    "highlights": "universitario"

                }, {
                    "id": "mr0",
                    "text": "Fisiología y biofísica",
                    "highlights": "universitario"

                }, {
                    "id": "mr1",
                    "text": "Flauta avanzado",
                    "highlights": "avanzado ",

                }, {
                    "id": "mr2",
                    "text": "Flauta basico",
                    "highlights": "basico"

                }, {
                    "id": "mr3",
                    "text": "Flauta intermedio",
                    "highlights": "intermedio"

                }, {
                    "id": "mr4",
                    "text": "Francés",
                    "highlights": "avanzado"

                }, {
                    "id": "mr5",
                    "text": "Francés",
                    "highlights": "basico"

                }, {
                    "id": "mr6",
                    "text": "Francés",
                    "highlights": "intermedio"

                }, {
                    "id": "mr7",
                    "text": "Fundamentos de la economía",
                    "highlights": "universitario"

                }, {
                    "id": "mr8",
                    "text": "Fundamentos de la ingeniería química",
                    "highlights": "universitario"

                }, {
                    "id": "mr9",
                    "text": "Fundamentos de química",
                    "highlights": "secundario"

                }, {
                    "id": "ms0",
                    "text": "Fundamentos de química general e inorgánica",
                    "highlights": "universitario"

                }
            ],


            'FA': [

                {
                    "id": "mp0",
                    "text": "Farmacología I",
                    "highlights": "universitario"

                }, {
                    "id": "mp1",
                    "text": "Farmacología y toxicología",
                    "highlights": "universitario"

                }
            ],

            'FARM': [

                {
                    "id": "mp0",
                    "text": "Farmacología I",
                    "highlights": "universitario"

                }, {
                    "id": "mp1",
                    "text": "Farmacología y toxicología",
                    "highlights": "universitario"

                }
            ],

            'FARMACIA': [

                {
                    "id": "mp0",
                    "text": "Farmacología I",
                    "highlights": "universitario"

                }, {
                    "id": "mp1",
                    "text": "Farmacología y toxicología",
                    "highlights": "universitario"

                }
            ],


            'FI': [

                {
                    "id": "mp2",
                    "text": "Filosofía",
                    "highlights": "secundario"

                }, {
                    "id": "mp3",
                    "text": "Filosofía",
                    "highlights": "universitario"

                }, {
                    "id": "mp4",
                    "text": "First certificate in english - FCE",
                    "highlights": "avanzado"

                }, {
                    "id": "mp5",
                    "text": "Física",
                    "highlights": "secundario"

                }, {
                    "id": "mp6",
                    "text": "Física",
                    "highlights": "tertiary",

                }, {
                    "id": "mp7",
                    "text": "Física",
                    "highlights": "universitario"

                }, {
                    "id": "mp8",
                    "text": "Física aplicada",
                    "highlights": "secundario"

                }, {
                    "id": "mq0",
                    "text": "Física aplicada",
                    "highlights": "universitario"

                }, {
                    "id": "mq1",
                    "text": "Física aplicada a la arquitectura",
                    "highlights": "universitario"

                }, {
                    "id": "mq2",
                    "text": "Física biológica",
                    "highlights": "universitario"

                }, {
                    "id": "mq3",
                    "text": "Física clásica y moderna",
                    "highlights": "secundario"

                }, {
                    "id": "mq4",
                    "text": "Física e introducción a la biofísica",
                    "highlights": "universitario"

                }, {
                    "id": "mq5",
                    "text": "Física general",
                    "highlights": "universitario"

                }, {
                    "id": "mq6",
                    "text": "Física I",
                    "highlights": "universitario"

                }, {
                    "id": "mq7",
                    "text": "Física II",
                    "highlights": "universitario"

                }, {
                    "id": "mq8",
                    "text": "Fisicoquímica",
                    "highlights": "secundario"

                }, {
                    "id": "mq9",
                    "text": "Fisicoquímica general",
                    "highlights": "universitario"

                }, {
                    "id": "mr0",
                    "text": "Fisiología y biofísica",
                    "highlights": "universitario"

                }
            ],


            'FL': [{
                "id": "mr1",
                "text": "Flauta avanzado",
                "highlights": "avanzado ",

            }, {
                "id": "mr2",
                "text": "Flauta basico",
                "highlights": "basico"

            }, {
                "id": "mr3",
                "text": "Flauta intermedio",
                "highlights": "intermedio"

            }],

            'FLA': [{
                "id": "mr1",
                "text": "Flauta avanzado",
                "highlights": "avanzado ",

            }, {
                "id": "mr2",
                "text": "Flauta basico",
                "highlights": "basico"

            }, {
                "id": "mr3",
                "text": "Flauta intermedio",
                "highlights": "intermedio"

            }],

            'FLAUTA': [{
                "id": "mr1",
                "text": "Flauta",
                "highlights": "avanzado"

            }],

            'FIR': [

                {
                    "id": "mp4",
                    "text": "First certificate in english - FCE",
                    "highlights": "avanzado"

                }
            ],

            'FIRST': [

                {
                    "id": "mp4",
                    "text": "First certificate in english - FCE",
                    "highlights": "avanzado"

                }
            ],


            'CERTIFICATE': [

                {
                    "id": "mp4",
                    "text": "First certificate in english - FCE",
                    "highlights": "avanzado"

                }
            ],


            'FIS': [

                {
                    "id": "mp5",
                    "text": "Física",
                    "highlights": "secundario"

                }, {
                    "id": "mp6",
                    "text": "Física",
                    "highlights": "tertiary",

                }, {
                    "id": "mp7",
                    "text": "Física",
                    "highlights": "universitario"

                }, {
                    "id": "mp8",
                    "text": "Física aplicada",
                    "highlights": "secundario"

                }, {
                    "id": "mq0",
                    "text": "Física aplicada",
                    "highlights": "universitario"

                }, {
                    "id": "mq1",
                    "text": "Física aplicada a la arquitectura",
                    "highlights": "universitario"

                }, {
                    "id": "mq2",
                    "text": "Física biológica",
                    "highlights": "universitario"

                }, {
                    "id": "mq3",
                    "text": "Física clásica y moderna",
                    "highlights": "secundario"

                }, {
                    "id": "mq4",
                    "text": "Física e introducción a la biofísica",
                    "highlights": "universitario"

                }, {
                    "id": "mq5",
                    "text": "Física general",
                    "highlights": "universitario"

                }, {
                    "id": "mq6",
                    "text": "Física I",
                    "highlights": "universitario"

                }, {
                    "id": "mq7",
                    "text": "Física II",
                    "highlights": "universitario"

                }, {
                    "id": "mq8",
                    "text": "Fisicoquímica",
                    "highlights": "secundario"

                }, {
                    "id": "mq9",
                    "text": "Fisicoquímica general",
                    "highlights": "universitario"

                }, {
                    "id": "mr0",
                    "text": "Fisiología y biofísica",
                    "highlights": "universitario"

                }
            ],

            'FISI': [

                {
                    "id": "mp5",
                    "text": "Física",
                    "highlights": "secundario"

                }, {
                    "id": "mp6",
                    "text": "Física",
                    "highlights": "tertiary",

                }, {
                    "id": "mp7",
                    "text": "Física",
                    "highlights": "universitario"

                }, {
                    "id": "mp8",
                    "text": "Física aplicada",
                    "highlights": "secundario"

                }, {
                    "id": "mq0",
                    "text": "Física aplicada",
                    "highlights": "universitario"

                }, {
                    "id": "mq1",
                    "text": "Física aplicada a la arquitectura",
                    "highlights": "universitario"

                }, {
                    "id": "mq2",
                    "text": "Física biológica",
                    "highlights": "universitario"

                }, {
                    "id": "mq3",
                    "text": "Física clásica y moderna",
                    "highlights": "secundario"

                }, {
                    "id": "mq4",
                    "text": "Física e introducción a la biofísica",
                    "highlights": "universitario"

                }, {
                    "id": "mq5",
                    "text": "Física general",
                    "highlights": "universitario"

                }, {
                    "id": "mq6",
                    "text": "Física I",
                    "highlights": "universitario"

                }, {
                    "id": "mq7",
                    "text": "Física II",
                    "highlights": "universitario"

                }
            ],

            'FISICA': [

                {
                    "id": "mp5",
                    "text": "Física",
                    "highlights": "secundario"

                }, {
                    "id": "mp6",
                    "text": "Física",
                    "highlights": "tertiary",

                }, {
                    "id": "mp7",
                    "text": "Física",
                    "highlights": "universitario"

                }, {
                    "id": "mp8",
                    "text": "Física aplicada",
                    "highlights": "secundario"

                }, {
                    "id": "mq0",
                    "text": "Física aplicada",
                    "highlights": "universitario"

                }, {
                    "id": "mq1",
                    "text": "Física aplicada a la arquitectura",
                    "highlights": "universitario"

                }, {
                    "id": "mq2",
                    "text": "Física biológica",
                    "highlights": "universitario"

                }, {
                    "id": "mq3",
                    "text": "Física clásica y moderna",
                    "highlights": "secundario"

                }, {
                    "id": "mq4",
                    "text": "Física e introducción a la biofísica",
                    "highlights": "universitario"

                }, {
                    "id": "mq5",
                    "text": "Física general",
                    "highlights": "universitario"

                }, {
                    "id": "mq6",
                    "text": "Física I",
                    "highlights": "universitario"

                }, {
                    "id": "mq7",
                    "text": "Física II",
                    "highlights": "universitario"

                }
            ],

            'FIL': [

                {
                    "id": "mp2",
                    "text": "Filosofía",
                    "highlights": "secundario"

                }, {
                    "id": "mp3",
                    "text": "Filosofía",
                    "highlights": "universitario"

                }
            ],

            'FILOSOFIA': [

                {
                    "id": "mp2",
                    "text": "Filosofía",
                    "highlights": "secundario"

                }, {
                    "id": "mp3",
                    "text": "Filosofía",
                    "highlights": "universitario"

                }
            ],

            'FR': [

                {
                    "id": "mr4",
                    "text": "Francés avanzado",
                    "highlights": "avanzado"

                }, {
                    "id": "mr5",
                    "text": "Francés basico",
                    "highlights": "basico"

                }, {
                    "id": "mr6",
                    "text": "Francés intermedio",
                    "highlights": "intermedio"

                }
            ],

            'FRAN': [

                {
                    "id": "mr4",
                    "text": "Francés avanzado",
                    "highlights": "avanzado"

                }, {
                    "id": "mr5",
                    "text": "Francés basico",
                    "highlights": "basico"

                }, {
                    "id": "mr6",
                    "text": "Francés intermedio",
                    "highlights": "intermedio"

                }
            ],

            'FRANCES': [

                {
                    "id": "mr4",
                    "text": "Francés avanzado",
                    "highlights": "avanzado"

                }, {
                    "id": "mr5",
                    "text": "Francés basico",
                    "highlights": "basico"

                }, {
                    "id": "mr6",
                    "text": "Francés intermedio",
                    "highlights": "intermedio"

                }
            ],

            'FU': [

                {
                    "id": "mr7",
                    "text": "Fundamentos de la economía",
                    "highlights": "universitario"

                }, {
                    "id": "mr8",
                    "text": "Fundamentos de la ingeniería química",
                    "highlights": "universitario"

                }, {
                    "id": "mr9",
                    "text": "Fundamentos de química",
                    "highlights": "secundario"

                }, {
                    "id": "ms0",
                    "text": "Fundamentos de química general e inorgánica",
                    "highlights": "universitario"

                }
            ],

            'FUND': [

                {
                    "id": "mr7",
                    "text": "Fundamentos de la economía",
                    "highlights": "universitario"

                }, {
                    "id": "mr8",
                    "text": "Fundamentos de la ingeniería química",
                    "highlights": "universitario"

                }, {
                    "id": "mr9",
                    "text": "Fundamentos de química",
                    "highlights": "secundario"

                }, {
                    "id": "ms0",
                    "text": "Fundamentos de química general e inorgánica",
                    "highlights": "universitario"

                }
            ],

            'FUNDAMENTOS': [

                {
                    "id": "mr7",
                    "text": "Fundamentos de la economía",
                    "highlights": "universitario"

                }, {
                    "id": "mr8",
                    "text": "Fundamentos de la ingeniería química",
                    "highlights": "universitario"

                }, {
                    "id": "mr9",
                    "text": "Fundamentos de química",
                    "highlights": "secundario"

                }, {
                    "id": "ms0",
                    "text": "Fundamentos de química general e inorgánica",
                    "highlights": "universitario"

                }
            ],

            'G': [

                {
                    "id": "ms1",
                    "text": "Geografía",
                    "highlights": "secundario"

                }, {
                    "id": "ms2",
                    "text": "Gramática española",
                    "highlights": "universitario"

                }, {
                    "id": "ms3",
                    "text": "Griego I",
                    "highlights": "universitario"

                }, {
                    "id": "ms4",
                    "text": "Griego II",
                    "highlights": "universitario"

                }, {
                    "id": "ms5",
                    "text": "Guitarra",
                    "highlights": "avanzado"

                }, {
                    "id": "ms6",
                    "text": "Guitarra",
                    "highlights": "basico"

                }, {
                    "id": "ms7",
                    "text": "Guitarra",
                    "highlights": "intermedio"

                }
            ],


            'GR': [

                {
                    "id": "ms2",
                    "text": "Gramática española",
                    "highlights": "universitario"

                }, {
                    "id": "ms3",
                    "text": "Griego I",
                    "highlights": "universitario"

                }, {
                    "id": "ms4",
                    "text": "Griego II",
                    "highlights": "universitario"

                }
            ],

            'GRA': [

                {
                    "id": "ms2",
                    "text": "Gramática española",
                    "highlights": "universitario"

                }
            ],

            'GRAMA': [

                {
                    "id": "ms2",
                    "text": "Gramática española",
                    "highlights": "universitario"

                }
            ],

            'GRAMATICA': [

                {
                    "id": "ms2",
                    "text": "Gramática española",
                    "highlights": "universitario"

                }
            ],

            'GRI': [{
                "id": "ms3",
                "text": "Griego I",
                "highlights": "universitario"

            }, {
                "id": "ms4",
                "text": "Griego II",
                "highlights": "universitario"

            }],

            'GRIEGO': [{
                "id": "ms3",
                "text": "Griego I",
                "highlights": "universitario"

            }, {
                "id": "ms4",
                "text": "Griego II",
                "highlights": "universitario"

            }],

            'GE': [

                {
                    "id": "ms1",
                    "text": "Geografía",
                    "highlights": "secundario"

                }
            ],

            'GEO': [

                {
                    "id": "ms1",
                    "text": "Geografía",
                    "highlights": "secundario"

                }
            ],

            'GEOG': [

                {
                    "id": "ms1",
                    "text": "Geografía",
                    "highlights": "secundario"

                }
            ],

            'GEOGR': [

                {
                    "id": "ms1",
                    "text": "Geografía",
                    "highlights": "secundario"

                }
            ],

            'GEOGRA': [

                {
                    "id": "ms1",
                    "text": "Geografía",
                    "highlights": "secundario"

                }
            ],

            'GEOGRAF': [

                {
                    "id": "ms1",
                    "text": "Geografía",
                    "highlights": "secundario"

                }
            ],

            'GEOGRAFI': [

                {
                    "id": "ms1",
                    "text": "Geografía",
                    "highlights": "secundario"

                }
            ],

            'GEOGRAFIA': [

                {
                    "id": "ms1",
                    "text": "Geografía",
                    "highlights": "secundario"

                }
            ],


            'GEOGRAFIA': [

                {
                    "id": "ms1",
                    "text": "Geografía",
                    "highlights": "secundario"

                }
            ],


            'GU': [{
                "id": "ms5",
                "text": "Guitarra",
                "highlights": "avanzado"

            }, {
                "id": "ms6",
                "text": "Guitarra",
                "highlights": "basico"

            }, {
                "id": "ms7",
                "text": "Guitarra",
                "highlights": "intermedio"

            }],

            'GUI': [{
                "id": "ms5",
                "text": "Guitarra",
                "highlights": "avanzado"

            }, {
                "id": "ms6",
                "text": "Guitarra",
                "highlights": "basico"

            }, {
                "id": "ms7",
                "text": "Guitarra",
                "highlights": "intermedio"

            }],

            'GUIT': [{
                "id": "ms5",
                "text": "Guitarra",
                "highlights": "avanzado"

            }, {
                "id": "ms6",
                "text": "Guitarra",
                "highlights": "basico"

            }, {
                "id": "ms7",
                "text": "Guitarra",
                "highlights": "intermedio"

            }],

             'GUITA': [{
                "id": "ms5",
                "text": "Guitarra",
                "highlights": "avanzado"

            }, {
                "id": "ms6",
                "text": "Guitarra",
                "highlights": "basico"

            }, {
                "id": "ms7",
                "text": "Guitarra",
                "highlights": "intermedio"

            }],


            'GUITAR': [{
                "id": "ms5",
                "text": "Guitarra",
                "highlights": "avanzado"

            }, {
                "id": "ms6",
                "text": "Guitarra",
                "highlights": "basico"

            }, {
                "id": "ms7",
                "text": "Guitarra",
                "highlights": "intermedio"

            }],

            'GUITARR': [{
                "id": "ms5",
                "text": "Guitarra",
                "highlights": "avanzado"

            }, {
                "id": "ms6",
                "text": "Guitarra",
                "highlights": "basico"

            }, {
                "id": "ms7",
                "text": "Guitarra",
                "highlights": "intermedio"

            }],

            'GUITARRA': [{
                "id": "ms5",
                "text": "Guitarra",
                "highlights": "avanzado"

            }, {
                "id": "ms6",
                "text": "Guitarra",
                "highlights": "basico"

            }, {
                "id": "ms7",
                "text": "Guitarra",
                "highlights": "intermedio"

            }],

            

            'H': [{
                "id": "ms8",
                "text": "Hebreo",
                "highlights": "avanzado"

            }, {
                "id": "ms9",
                "text": "Hebreo",
                "highlights": "basico"

            }, {
                "id": "mx0",
                "text": "Hebreo",
                "highlights": "intermedio"

            }, {
                "id": "mx1",
                "text": "Histología, biología celular, embriología y genética",
                "highlights": "universitario"

            }, {
                "id": "mx2",
                "text": "Histología y biología celular",
                "highlights": "universitario"

            }, {
                "id": "mx3",
                "text": "Historia",
                "highlights": "secundario"

            }, {
                "id": "mx4",
                "text": "Historia - Ciencias naturales",
                "highlights": "secundario"

            }, {
                "id": "mx5",
                "text": "Historia - Ciencias sociales",
                "highlights": "secundario"

            }, {
                "id": "mx6",
                "text": "Historia constitucional",
                "highlights": "universitario"

            }, {
                "id": "mx7",
                "text": "Historia de la arquitectura I",
                "highlights": "universitario"

            }, {
                "id": "mx8",
                "text": "Historia - Economía y administración",
                "highlights": "secundario"

            }, {
                "id": "mx9",
                "text": "Historia económica y social Argentina",
                "highlights": "universitario"

            }, {
                "id": "mz0",
                "text": "Historia económica y social general",
                "highlights": "universitario"

            }, {
                "id": "mz1",
                "text": "Historia I (arquitectura moderna y diseño)",
                "highlights": "universitario"

            }, {
                "id": "mz2",
                "text": "Historia - Informática",
                "highlights": "secundario"

            }, {
                "id": "mz3",
                "text": "Holandés",
                "highlights": "avanzado"

            }, {
                "id": "mz4",
                "text": "Holandés",
                "highlights": "basico"

            }, {
                "id": "mz5",
                "text": "Holandés",
                "highlights": "intermedio"

            }],


            'HE': [{
                "id": "ms8",
                "text": "Hebreo",
                "highlights": "avanzado"

            }, {
                "id": "ms9",
                "text": "Hebreo",
                "highlights": "basico"

            }, {
                "id": "mx0",
                "text": "Hebreo",
                "highlights": "intermedio"

            }],

            'HEB': [{
                "id": "ms8",
                "text": "Hebreo",
                "highlights": "avanzado"

            }, {
                "id": "ms9",
                "text": "Hebreo",
                "highlights": "basico"

            }, {
                "id": "mx0",
                "text": "Hebreo",
                "highlights": "intermedio"

            }],

            'HEBR': [{
                "id": "ms8",
                "text": "Hebreo",
                "highlights": "avanzado"

            }, {
                "id": "ms9",
                "text": "Hebreo",
                "highlights": "basico"

            }, {
                "id": "mx0",
                "text": "Hebreo",
                "highlights": "intermedio"

            }],

            'HEBRE': [{
                "id": "ms8",
                "text": "Hebreo",
                "highlights": "avanzado"

            }, {
                "id": "ms9",
                "text": "Hebreo",
                "highlights": "basico"

            }, {
                "id": "mx0",
                "text": "Hebreo",
                "highlights": "intermedio"

            }],


            'HEBREO': [{
                "id": "ms8",
                "text": "Hebreo",
                "highlights": "avanzado"

            }, {
                "id": "ms9",
                "text": "Hebreo",
                "highlights": "basico"

            }, {
                "id": "mx0",
                "text": "Hebreo",
                "highlights": "intermedio"

            }],




            'H': [{
                "id": "ms8",
                "text": "Hebreo",
                "highlights": "avanzado"

            }, {
                "id": "ms9",
                "text": "Hebreo",
                "highlights": "basico"

            }, {
                "id": "mx0",
                "text": "Hebreo",
                "highlights": "intermedio"

            }, {
                "id": "mx1",
                "text": "Histología, biología celular, embriología y genética",
                "highlights": "universitario"

            }, {
                "id": "mx2",
                "text": "Histología y biología celular",
                "highlights": "universitario"

            }, {
                "id": "mx3",
                "text": "Historia",
                "highlights": "secundario"

            }, {
                "id": "mx4",
                "text": "Historia - Ciencias naturales",
                "highlights": "secundario"

            }, {
                "id": "mx5",
                "text": "Historia - Ciencias sociales",
                "highlights": "secundario"

            }, {
                "id": "mx6",
                "text": "Historia constitucional",
                "highlights": "universitario"

            }, {
                "id": "mx7",
                "text": "Historia de la arquitectura I",
                "highlights": "universitario"

            }, {
                "id": "mx8",
                "text": "Historia - Economía y administración",
                "highlights": "secundario"

            }, {
                "id": "mx9",
                "text": "Historia económica y social Argentina",
                "highlights": "universitario"

            }, {
                "id": "mz0",
                "text": "Historia económica y social general",
                "highlights": "universitario"

            }, {
                "id": "mz1",
                "text": "Historia I (arquitectura moderna y diseño)",
                "highlights": "universitario"

            }, {
                "id": "mz2",
                "text": "Historia - Informática",
                "highlights": "secundario"

            }, {
                "id": "mz3",
                "text": "Holandés",
                "highlights": "avanzado"

            }, {
                "id": "mz4",
                "text": "Holandés",
                "highlights": "basico"

            }, {
                "id": "mz5",
                "text": "Holandés",
                "highlights": "intermedio"

            }],


            'I': [{
                "id": "mz6",
                "text": "Impuestos I",
                "highlights": "universitario"

            }, {
                "id": "mz7",
                "text": "Impuestos II",
                "highlights": "universitario"

            }, {
                "id": "mz8",
                "text": "Inglés",
                "highlights": "avanzado"

            }, {
                "id": "mz9",
                "text": "Inglés",
                "highlights": "basico"
            }, {
                "id": "na0",
                "text": "Inglés",
                "highlights": "intermedio"

            }, {
                "id": "na2",
                "text": "Inglés",
                "highlights": "primaria",

            }, {
                "id": "na3",
                "text": "Inglés",
                "highlights": "secundario"

            }, {
                "id": "na4",
                "text": "Inglés",
                "highlights": "universitario"

            }, {
                "id": "na5",
                "text": "Ingreso EMUNS - Lengua",
                "highlights": "secundario"

            }, {
                "id": "na6",
                "text": "Ingreso UNC - Biología",
                "highlights": "universitario"

            }, {
                "id": "na7",
                "text": "Ingreso UNC - Física",
                "highlights": "universitario"

            }, {
                "id": "na8",
                "text": "Ingreso UNC - Introducción a los estudios de la carrera de abogacía",
                "highlights": "universitario"

            }, {
                "id": "na9",
                "text": "Ingreso UNC - Lengua",
                "highlights": "universitario"

            }, {
                "id": "nb0",
                "text": "Ingreso UNC - Matemática",
                "highlights": "universitario"

            }, {
                "id": "nb1",
                "text": "Ingreso UNC - Quimica",
                "highlights": "universitario"

            }, {
                "id": "nb2",
                "text": "Ingreso UNS - Análisis y comprensión de problemas",
                "highlights": "universitario"

            }, {
                "id": "nb3",
                "text": "Ingreso UNS - Comprensión de textos",
                "highlights": "universitario"

            }, {
                "id": "nb4",
                "text": "Ingreso UNS - Enfermería",
                "highlights": "universitario"

            }, {
                "id": "nb5",
                "text": "Ingreso UNS - Física",
                "highlights": "universitario"

            }, {
                "id": "nb6",
                "text": "Ingreso UNS - Formación ética y ciudadana",
                "highlights": "universitario"

            }, {
                "id": "nb7",
                "text": "Ingreso UNS - Geografía",
                "highlights": "universitario"

            }, {
                "id": "nb8",
                "text": "Ingreso UNS - Matemática",
                "highlights": "universitario"

            }, {
                "id": "nc0",
                "text": "Ingreso UNS - Medicina",
                "highlights": "universitario"

            }, {
                "id": "nc1",
                "text": "Ingreso UNS - Nociones básicas de administración y contabilidad",
                "highlights": "universitario"

            }, {
                "id": "nc2",
                "text": "Ingreso UNS - Química",
                "highlights": "universitario"

            }, {
                "id": "nc3",
                "text": "Ingreso UTN - Física",
                "highlights": "universitario"

            }, {
                "id": "nc4",
                "text": "Ingreso UTN - Matemática",
                "highlights": "universitario"

            }, {
                "id": "nc5",
                "text": "Inmunología humana",
                "highlights": "universitario"

            }, {
                "id": "nc6",
                "text": "Instalaciones I",
                "highlights": "universitario"

            }, {
                "id": "nc7",
                "text": "Instalaciones II",
                "highlights": "universitario"

            }, {
                "id": "nc8",
                "text": "Instituciones de derecho público",
                "highlights": "universitario"

            }, {
                "id": "nc9",
                "text": "International english language testing system - IELTS",
                "highlights": "avanzado"

            }, {
                "id": "nd0",
                "text": "Introducción a la administración",
                "highlights": "universitario"

            }, {
                "id": "nd1",
                "text": "Introducción a la arquitectura contemporánea",
                "highlights": "universitario"

            }, {
                "id": "nd2",
                "text": "Introducción a la biología celular",
                "highlights": "secundario"

            }, {
                "id": "nd3",
                "text": "Introducción a la enfermería en salud pública",
                "highlights": "universitario"

            }, {
                "id": "nd4",
                "text": "Introducción a la física",
                "highlights": "secundario"

            }, {
                "id": "nd5",
                "text": "Introducción a la geografía",
                "highlights": "universitario"

            }, {
                "id": "nd6",
                "text": "Introducción a la historia de la arquitectura",
                "highlights": "universitario"

            }, {
                "id": "nd7",
                "text": "Introducción a la ingeniería industrial",
                "highlights": "universitario"

            }, {
                "id": "nd8",
                "text": "Introducción a la matemática",
                "highlights": "universitario"

            }, {
                "id": "nd9",
                "text": "Introducción a la química",
                "highlights": "secundario"

            }, {
                "id": "ne0",
                "text": "Introducción al conocimiento de la sociedad y el estado",
                "highlights": "universitario"

            }, {
                "id": "ne1",
                "text": "Introducción al conocimiento proyectual I",
                "highlights": "universitario"

            }, {
                "id": "ne2",
                "text": "Introducción al conocimiento proyectual II",
                "highlights": "universitario"

            }, {
                "id": "ne3",
                "text": "Introducción al derecho",
                "highlights": "universitario"

            }, {
                "id": "ne4",
                "text": "Introducción al diseño y a la arquitectura moderna",
                "highlights": "universitario"

            }, {
                "id": "ne5",
                "text": "Introducción al estudio de las ciencias sociales",
                "highlights": "universitario"

            }, {
                "id": "ne6",
                "text": "Introducción a los estudios universitarios y la economía",
                "highlights": "universitario"

            }, {
                "id": "ne7",
                "text": "Introducción a los fundamentos del diseño",
                "highlights": "universitario"

            }, {
                "id": "ne8",
                "text": "Introducción a los tipos constructivos",
                "highlights": "universitario"

            }, {
                "id": "ne9",
                "text": "Introducción a los tipos estructurales",
                "highlights": "universitario"

            }, {
                "id": "nf0",
                "text": "Introducción al pensamiento científico",
                "highlights": "universitario"

            }, {
                "id": "nf1",
                "text": "Italiano",
                "highlights": "avanzado"

            }, {
                "id": "nf2",
                "text": "Italiano",
                "highlights": "basico"

            }, {
                "id": "nf3",
                "text": "Italiano",
                "highlights": "intermedio"

            }],


            'IM': [{
                "id": "mz6",
                "text": "Impuestos I",
                "highlights": "universitario"

            }, {
                "id": "mz7",
                "text": "Impuestos II",
                "highlights": "universitario"

            }, {
                "id": "mz8",
                "text": "Inglés",
                "highlights": "avanzado"

            }],

            'IMP': [{
                "id": "mz6",
                "text": "Impuestos I",
                "highlights": "universitario"

            }, {
                "id": "mz7",
                "text": "Impuestos II",
                "highlights": "universitario"

            }, {
                "id": "mz8",
                "text": "Inglés",
                "highlights": "avanzado"

            }],

            'IMPU': [{
                "id": "mz6",
                "text": "Impuestos I",
                "highlights": "universitario"

            }, {
                "id": "mz7",
                "text": "Impuestos II",
                "highlights": "universitario"

            }, {
                "id": "mz8",
                "text": "Inglés",
                "highlights": "avanzado"

            }],

            'IMPUE': [{
                "id": "mz6",
                "text": "Impuestos I",
                "highlights": "universitario"

            }, {
                "id": "mz7",
                "text": "Impuestos II",
                "highlights": "universitario"

            }, {
                "id": "mz8",
                "text": "Inglés",
                "highlights": "avanzado"

            }],

            'IMPUES': [{
                "id": "mz6",
                "text": "Impuestos I",
                "highlights": "universitario"

            }, {
                "id": "mz7",
                "text": "Impuestos II",
                "highlights": "universitario"

            }, {
                "id": "mz8",
                "text": "Inglés",
                "highlights": "avanzado"

            }],

            'IMPUEST': [{
                "id": "mz6",
                "text": "Impuestos I",
                "highlights": "universitario"

            }, {
                "id": "mz7",
                "text": "Impuestos II",
                "highlights": "universitario"

            }, {
                "id": "mz8",
                "text": "Inglés",
                "highlights": "avanzado"

            }],

            'IMPUESTO': [{
                "id": "mz6",
                "text": "Impuestos I",
                "highlights": "universitario"

            }, {
                "id": "mz7",
                "text": "Impuestos II",
                "highlights": "universitario"

            }, {
                "id": "mz8",
                "text": "Inglés",
                "highlights": "avanzado"

            }],

            'IMPUESTOS': [{
                "id": "mz6",
                "text": "Impuestos I",
                "highlights": "universitario"

            }, {
                "id": "mz7",
                "text": "Impuestos II",
                "highlights": "universitario"

            }, {
                "id": "mz8",
                "text": "Inglés",
                "highlights": "avanzado"

            }],

            'IN': [{
                "id": "mz8",
                "text": "Inglés",
                "highlights": "avanzado"

            }, {
                "id": "mz9",
                "text": "Inglés",
                "highlights": "basico"
            }, {
                "id": "na0",
                "text": "Inglés",
                "highlights": "intermedio"

            }, {
                "id": "na2",
                "text": "Inglés",
                "highlights": "primaria",

            }, {
                "id": "na3",
                "text": "Inglés",
                "highlights": "secundario"

            }, {
                "id": "na4",
                "text": "Inglés",
                "highlights": "universitario"

            }, {
                "id": "na5",
                "text": "Ingreso EMUNS - Lengua",
                "highlights": "secundario"

            }, {
                "id": "na6",
                "text": "Ingreso UNC - Biología",
                "highlights": "universitario"

            }, {
                "id": "na7",
                "text": "Ingreso UNC - Física",
                "highlights": "universitario"

            }, {
                "id": "na8",
                "text": "Ingreso UNC - Introducción a los estudios de la carrera de abogacía",
                "highlights": "universitario"

            }, {
                "id": "na9",
                "text": "Ingreso UNC - Lengua",
                "highlights": "universitario"

            }, {
                "id": "nb0",
                "text": "Ingreso UNC - Matemática",
                "highlights": "universitario"

            }, {
                "id": "nb1",
                "text": "Ingreso UNC - Quimica",
                "highlights": "universitario"

            }, {
                "id": "nb2",
                "text": "Ingreso UNS - Análisis y comprensión de problemas",
                "highlights": "universitario"

            }, {
                "id": "nb3",
                "text": "Ingreso UNS - Comprensión de textos",
                "highlights": "universitario"

            }, {
                "id": "nb4",
                "text": "Ingreso UNS - Enfermería",
                "highlights": "universitario"

            }, {
                "id": "nb5",
                "text": "Ingreso UNS - Física",
                "highlights": "universitario"

            }, {
                "id": "nb6",
                "text": "Ingreso UNS - Formación ética y ciudadana",
                "highlights": "universitario"

            }, {
                "id": "nb7",
                "text": "Ingreso UNS - Geografía",
                "highlights": "universitario"

            }, {
                "id": "nb8",
                "text": "Ingreso UNS - Matemática",
                "highlights": "universitario"

            }, {
                "id": "nc0",
                "text": "Ingreso UNS - Medicina",
                "highlights": "universitario"

            }, {
                "id": "nc1",
                "text": "Ingreso UNS - Nociones básicas de administración y contabilidad",
                "highlights": "universitario"

            }, {
                "id": "nc2",
                "text": "Ingreso UNS - Química",
                "highlights": "universitario"

            }, {
                "id": "nc3",
                "text": "Ingreso UTN - Física",
                "highlights": "universitario"

            }, {
                "id": "nc4",
                "text": "Ingreso UTN - Matemática",
                "highlights": "universitario"

            }, {
                "id": "nc5",
                "text": "Inmunología humana",
                "highlights": "universitario"

            }, {
                "id": "nc6",
                "text": "Instalaciones I",
                "highlights": "universitario"

            }, {
                "id": "nc7",
                "text": "Instalaciones II",
                "highlights": "universitario"

            }, {
                "id": "nc8",
                "text": "Instituciones de derecho público",
                "highlights": "universitario"

            }, {
                "id": "nc9",
                "text": "International english language testing system - IELTS",
                "highlights": "avanzado"

            }, {
                "id": "nd0",
                "text": "Introducción a la administración",
                "highlights": "universitario"

            }, {
                "id": "nd1",
                "text": "Introducción a la arquitectura contemporánea",
                "highlights": "universitario"

            }, {
                "id": "nd2",
                "text": "Introducción a la biología celular",
                "highlights": "secundario"

            }, {
                "id": "nd3",
                "text": "Introducción a la enfermería en salud pública",
                "highlights": "universitario"

            }, {
                "id": "nd4",
                "text": "Introducción a la física",
                "highlights": "secundario"

            }, {
                "id": "nd5",
                "text": "Introducción a la geografía",
                "highlights": "universitario"

            }, {
                "id": "nd6",
                "text": "Introducción a la historia de la arquitectura",
                "highlights": "universitario"

            }, {
                "id": "nd7",
                "text": "Introducción a la ingeniería industrial",
                "highlights": "universitario"

            }, {
                "id": "nd8",
                "text": "Introducción a la matemática",
                "highlights": "universitario"

            }, {
                "id": "nd9",
                "text": "Introducción a la química",
                "highlights": "secundario"

            }, {
                "id": "ne0",
                "text": "Introducción al conocimiento de la sociedad y el estado",
                "highlights": "universitario"

            }, {
                "id": "ne1",
                "text": "Introducción al conocimiento proyectual I",
                "highlights": "universitario"

            }, {
                "id": "ne2",
                "text": "Introducción al conocimiento proyectual II",
                "highlights": "universitario"

            }, {
                "id": "ne3",
                "text": "Introducción al derecho",
                "highlights": "universitario"

            }, {
                "id": "ne4",
                "text": "Introducción al diseño y a la arquitectura moderna",
                "highlights": "universitario"

            }, {
                "id": "ne5",
                "text": "Introducción al estudio de las ciencias sociales",
                "highlights": "universitario"

            }, {
                "id": "ne6",
                "text": "Introducción a los estudios universitarios y la economía",
                "highlights": "universitario"

            }, {
                "id": "ne7",
                "text": "Introducción a los fundamentos del diseño",
                "highlights": "universitario"

            }, {
                "id": "ne8",
                "text": "Introducción a los tipos constructivos",
                "highlights": "universitario"

            }, {
                "id": "ne9",
                "text": "Introducción a los tipos estructurales",
                "highlights": "universitario"

            }, {
                "id": "nf0",
                "text": "Introducción al pensamiento científico",
                "highlights": "universitario"

            }],


            'ING': [{
                "id": "mz8",
                "text": "Inglés",
                "highlights": "avanzado"

            }, {
                "id": "mz9",
                "text": "Inglés",
                "highlights": "basico"
            }, {
                "id": "na0",
                "text": "Inglés",
                "highlights": "intermedio"

            }, {
                "id": "na2",
                "text": "Inglés",
                "highlights": "primaria",

            }, {
                "id": "na3",
                "text": "Inglés",
                "highlights": "secundario"

            }, {
                "id": "na4",
                "text": "Inglés",
                "highlights": "universitario"

            }, {
                "id": "na5",
                "text": "Ingreso EMUNS - Lengua",
                "highlights": "secundario"

            }, {
                "id": "na6",
                "text": "Ingreso UNC - Biología",
                "highlights": "universitario"

            }, {
                "id": "na7",
                "text": "Ingreso UNC - Física",
                "highlights": "universitario"

            }, {
                "id": "na8",
                "text": "Ingreso UNC - Introducción a los estudios de la carrera de abogacía",
                "highlights": "universitario"

            }, {
                "id": "na9",
                "text": "Ingreso UNC - Lengua",
                "highlights": "universitario"

            }, {
                "id": "nb0",
                "text": "Ingreso UNC - Matemática",
                "highlights": "universitario"

            }, {
                "id": "nb1",
                "text": "Ingreso UNC - Quimica",
                "highlights": "universitario"

            }, {
                "id": "nb2",
                "text": "Ingreso UNS - Análisis y comprensión de problemas",
                "highlights": "universitario"

            }, {
                "id": "nb3",
                "text": "Ingreso UNS - Comprensión de textos",
                "highlights": "universitario"

            }, {
                "id": "nb4",
                "text": "Ingreso UNS - Enfermería",
                "highlights": "universitario"

            }, {
                "id": "nb5",
                "text": "Ingreso UNS - Física",
                "highlights": "universitario"

            }, {
                "id": "nb6",
                "text": "Ingreso UNS - Formación ética y ciudadana",
                "highlights": "universitario"

            }, {
                "id": "nb7",
                "text": "Ingreso UNS - Geografía",
                "highlights": "universitario"

            }, {
                "id": "nb8",
                "text": "Ingreso UNS - Matemática",
                "highlights": "universitario"

            }, {
                "id": "nc0",
                "text": "Ingreso UNS - Medicina",
                "highlights": "universitario"

            }, {
                "id": "nc1",
                "text": "Ingreso UNS - Nociones básicas de administración y contabilidad",
                "highlights": "universitario"

            }, {
                "id": "nc2",
                "text": "Ingreso UNS - Química",
                "highlights": "universitario"

            }, {
                "id": "nc3",
                "text": "Ingreso UTN - Física",
                "highlights": "universitario"

            }, {
                "id": "nc4",
                "text": "Ingreso UTN - Matemática",
                "highlights": "universitario"

            }],


            'INGL': [{
                "id": "mz8",
                "text": "Inglés",
                "highlights": "avanzado"

            }, {
                "id": "mz9",
                "text": "Inglés",
                "highlights": "basico"
            }, {
                "id": "na0",
                "text": "Inglés",
                "highlights": "intermedio"

            }, {
                "id": "na2",
                "text": "Inglés",
                "highlights": "primaria",

            }, {
                "id": "na3",
                "text": "Inglés",
                "highlights": "secundario"

            }, {
                "id": "na4",
                "text": "Inglés",
                "highlights": "universitario"

            }],

            'INGLE': [{
                "id": "mz8",
                "text": "Inglés",
                "highlights": "avanzado"

            }, {
                "id": "mz9",
                "text": "Inglés",
                "highlights": "basico"
            }, {
                "id": "na0",
                "text": "Inglés",
                "highlights": "intermedio"

            }, {
                "id": "na2",
                "text": "Inglés",
                "highlights": "primaria",

            }, {
                "id": "na3",
                "text": "Inglés",
                "highlights": "secundario"

            }, {
                "id": "na4",
                "text": "Inglés",
                "highlights": "universitario"

            }],

            'INGLES': [{
                "id": "mz8",
                "text": "Inglés",
                "highlights": "avanzado"

            }, {
                "id": "mz9",
                "text": "Inglés",
                "highlights": "basico"
            }, {
                "id": "na0",
                "text": "Inglés",
                "highlights": "intermedio"

            }, {
                "id": "na2",
                "text": "Inglés",
                "highlights": "primaria",

            }, {
                "id": "na3",
                "text": "Inglés",
                "highlights": "secundario"

            }, {
                "id": "na4",
                "text": "Inglés",
                "highlights": "universitario"

            }],


            'INGR': [{
                "id": "na5",
                "text": "Ingreso EMUNS - Lengua",
                "highlights": "secundario"

            }, {
                "id": "na6",
                "text": "Ingreso UNC - Biología",
                "highlights": "universitario"

            }, {
                "id": "na7",
                "text": "Ingreso UNC - Física",
                "highlights": "universitario"

            }, {
                "id": "na8",
                "text": "Ingreso UNC - Introducción a los estudios de la carrera de abogacía",
                "highlights": "universitario"

            }, {
                "id": "na9",
                "text": "Ingreso UNC - Lengua",
                "highlights": "universitario"

            }, {
                "id": "nb0",
                "text": "Ingreso UNC - Matemática",
                "highlights": "universitario"

            }, {
                "id": "nb1",
                "text": "Ingreso UNC - Quimica",
                "highlights": "universitario"

            }, {
                "id": "nb2",
                "text": "Ingreso UNS - Análisis y comprensión de problemas",
                "highlights": "universitario"

            }, {
                "id": "nb3",
                "text": "Ingreso UNS - Comprensión de textos",
                "highlights": "universitario"

            }, {
                "id": "nb4",
                "text": "Ingreso UNS - Enfermería",
                "highlights": "universitario"

            }, {
                "id": "nb5",
                "text": "Ingreso UNS - Física",
                "highlights": "universitario"

            }, {
                "id": "nb6",
                "text": "Ingreso UNS - Formación ética y ciudadana",
                "highlights": "universitario"

            }, {
                "id": "nb7",
                "text": "Ingreso UNS - Geografía",
                "highlights": "universitario"

            }, {
                "id": "nb8",
                "text": "Ingreso UNS - Matemática",
                "highlights": "universitario"

            }, {
                "id": "nc0",
                "text": "Ingreso UNS - Medicina",
                "highlights": "universitario"

            }, {
                "id": "nc1",
                "text": "Ingreso UNS - Nociones básicas de administración y contabilidad",
                "highlights": "universitario"

            }, {
                "id": "nc2",
                "text": "Ingreso UNS - Química",
                "highlights": "universitario"

            }, {
                "id": "nc3",
                "text": "Ingreso UTN - Física",
                "highlights": "universitario"

            }, {
                "id": "nc4",
                "text": "Ingreso UTN - Matemática",
                "highlights": "universitario"

            }],

            'INGRE': [{
                "id": "na5",
                "text": "Ingreso EMUNS - Lengua",
                "highlights": "secundario"

            }, {
                "id": "na6",
                "text": "Ingreso UNC - Biología",
                "highlights": "universitario"

            }, {
                "id": "na7",
                "text": "Ingreso UNC - Física",
                "highlights": "universitario"

            }, {
                "id": "na8",
                "text": "Ingreso UNC - Introducción a los estudios de la carrera de abogacía",
                "highlights": "universitario"

            }, {
                "id": "na9",
                "text": "Ingreso UNC - Lengua",
                "highlights": "universitario"

            }, {
                "id": "nb0",
                "text": "Ingreso UNC - Matemática",
                "highlights": "universitario"

            }, {
                "id": "nb1",
                "text": "Ingreso UNC - Quimica",
                "highlights": "universitario"

            }, {
                "id": "nb2",
                "text": "Ingreso UNS - Análisis y comprensión de problemas",
                "highlights": "universitario"

            }, {
                "id": "nb3",
                "text": "Ingreso UNS - Comprensión de textos",
                "highlights": "universitario"

            }, {
                "id": "nb4",
                "text": "Ingreso UNS - Enfermería",
                "highlights": "universitario"

            }, {
                "id": "nb5",
                "text": "Ingreso UNS - Física",
                "highlights": "universitario"

            }, {
                "id": "nb6",
                "text": "Ingreso UNS - Formación ética y ciudadana",
                "highlights": "universitario"

            }, {
                "id": "nb7",
                "text": "Ingreso UNS - Geografía",
                "highlights": "universitario"

            }, {
                "id": "nb8",
                "text": "Ingreso UNS - Matemática",
                "highlights": "universitario"

            }, {
                "id": "nc0",
                "text": "Ingreso UNS - Medicina",
                "highlights": "universitario"

            }, {
                "id": "nc1",
                "text": "Ingreso UNS - Nociones básicas de administración y contabilidad",
                "highlights": "universitario"

            }, {
                "id": "nc2",
                "text": "Ingreso UNS - Química",
                "highlights": "universitario"

            }, {
                "id": "nc3",
                "text": "Ingreso UTN - Física",
                "highlights": "universitario"

            }, {
                "id": "nc4",
                "text": "Ingreso UTN - Matemática",
                "highlights": "universitario"

            }],

            'INGRES': [{
                "id": "na5",
                "text": "Ingreso EMUNS - Lengua",
                "highlights": "secundario"

            }, {
                "id": "na6",
                "text": "Ingreso UNC - Biología",
                "highlights": "universitario"

            }, {
                "id": "na7",
                "text": "Ingreso UNC - Física",
                "highlights": "universitario"

            }, {
                "id": "na8",
                "text": "Ingreso UNC - Introducción a los estudios de la carrera de abogacía",
                "highlights": "universitario"

            }, {
                "id": "na9",
                "text": "Ingreso UNC - Lengua",
                "highlights": "universitario"

            }, {
                "id": "nb0",
                "text": "Ingreso UNC - Matemática",
                "highlights": "universitario"

            }, {
                "id": "nb1",
                "text": "Ingreso UNC - Quimica",
                "highlights": "universitario"

            }, {
                "id": "nb2",
                "text": "Ingreso UNS - Análisis y comprensión de problemas",
                "highlights": "universitario"

            }, {
                "id": "nb3",
                "text": "Ingreso UNS - Comprensión de textos",
                "highlights": "universitario"

            }, {
                "id": "nb4",
                "text": "Ingreso UNS - Enfermería",
                "highlights": "universitario"

            }, {
                "id": "nb5",
                "text": "Ingreso UNS - Física",
                "highlights": "universitario"

            }, {
                "id": "nb6",
                "text": "Ingreso UNS - Formación ética y ciudadana",
                "highlights": "universitario"

            }, {
                "id": "nb7",
                "text": "Ingreso UNS - Geografía",
                "highlights": "universitario"

            }, {
                "id": "nb8",
                "text": "Ingreso UNS - Matemática",
                "highlights": "universitario"

            }, {
                "id": "nc0",
                "text": "Ingreso UNS - Medicina",
                "highlights": "universitario"

            }, {
                "id": "nc1",
                "text": "Ingreso UNS - Nociones básicas de administración y contabilidad",
                "highlights": "universitario"

            }, {
                "id": "nc2",
                "text": "Ingreso UNS - Química",
                "highlights": "universitario"

            }, {
                "id": "nc3",
                "text": "Ingreso UTN - Física",
                "highlights": "universitario"

            }, {
                "id": "nc4",
                "text": "Ingreso UTN - Matemática",
                "highlights": "universitario"

            }],


            'INGRESO': [{
                "id": "na5",
                "text": "Ingreso EMUNS - Lengua",
                "highlights": "secundario"

            }, {
                "id": "na6",
                "text": "Ingreso UNC - Biología",
                "highlights": "universitario"

            }, {
                "id": "na7",
                "text": "Ingreso UNC - Física",
                "highlights": "universitario"

            }, {
                "id": "na8",
                "text": "Ingreso UNC - Introducción a los estudios de la carrera de abogacía",
                "highlights": "universitario"

            }, {
                "id": "na9",
                "text": "Ingreso UNC - Lengua",
                "highlights": "universitario"

            }, {
                "id": "nb0",
                "text": "Ingreso UNC - Matemática",
                "highlights": "universitario"

            }, {
                "id": "nb1",
                "text": "Ingreso UNC - Quimica",
                "highlights": "universitario"

            }, {
                "id": "nb2",
                "text": "Ingreso UNS - Análisis y comprensión de problemas",
                "highlights": "universitario"

            }, {
                "id": "nb3",
                "text": "Ingreso UNS - Comprensión de textos",
                "highlights": "universitario"

            }, {
                "id": "nb4",
                "text": "Ingreso UNS - Enfermería",
                "highlights": "universitario"

            }, {
                "id": "nb5",
                "text": "Ingreso UNS - Física",
                "highlights": "universitario"

            }, {
                "id": "nb6",
                "text": "Ingreso UNS - Formación ética y ciudadana",
                "highlights": "universitario"

            }, {
                "id": "nb7",
                "text": "Ingreso UNS - Geografía",
                "highlights": "universitario"

            }, {
                "id": "nb8",
                "text": "Ingreso UNS - Matemática",
                "highlights": "universitario"

            }, {
                "id": "nc0",
                "text": "Ingreso UNS - Medicina",
                "highlights": "universitario"

            }, {
                "id": "nc1",
                "text": "Ingreso UNS - Nociones básicas de administración y contabilidad",
                "highlights": "universitario"

            }, {
                "id": "nc2",
                "text": "Ingreso UNS - Química",
                "highlights": "universitario"

            }, {
                "id": "nc3",
                "text": "Ingreso UTN - Física",
                "highlights": "universitario"

            }, {
                "id": "nc4",
                "text": "Ingreso UTN - Matemática",
                "highlights": "universitario"

            }],

            'INT': [{
                "id": "nc9",
                "text": "International english language testing system - IELTS",
                "highlights": "avanzado"

            }, {
                "id": "nd0",
                "text": "Introducción a la administración",
                "highlights": "universitario"

            }, {
                "id": "nd1",
                "text": "Introducción a la arquitectura contemporánea",
                "highlights": "universitario"

            }, {
                "id": "nd2",
                "text": "Introducción a la biología celular",
                "highlights": "secundario"

            }, {
                "id": "nd3",
                "text": "Introducción a la enfermería en salud pública",
                "highlights": "universitario"

            }, {
                "id": "nd4",
                "text": "Introducción a la física",
                "highlights": "secundario"

            }, {
                "id": "nd5",
                "text": "Introducción a la geografía",
                "highlights": "universitario"

            }, {
                "id": "nd6",
                "text": "Introducción a la historia de la arquitectura",
                "highlights": "universitario"

            }, {
                "id": "nd7",
                "text": "Introducción a la ingeniería industrial",
                "highlights": "universitario"

            }, {
                "id": "nd8",
                "text": "Introducción a la matemática",
                "highlights": "universitario"

            }, {
                "id": "nd9",
                "text": "Introducción a la química",
                "highlights": "secundario"

            }, {
                "id": "ne0",
                "text": "Introducción al conocimiento de la sociedad y el estado",
                "highlights": "universitario"

            }, {
                "id": "ne1",
                "text": "Introducción al conocimiento proyectual I",
                "highlights": "universitario"

            }, {
                "id": "ne2",
                "text": "Introducción al conocimiento proyectual II",
                "highlights": "universitario"

            }, {
                "id": "ne3",
                "text": "Introducción al derecho",
                "highlights": "universitario"

            }, {
                "id": "ne4",
                "text": "Introducción al diseño y a la arquitectura moderna",
                "highlights": "universitario"

            }, {
                "id": "ne5",
                "text": "Introducción al estudio de las ciencias sociales",
                "highlights": "universitario"

            }, {
                "id": "ne6",
                "text": "Introducción a los estudios universitarios y la economía",
                "highlights": "universitario"

            }, {
                "id": "ne7",
                "text": "Introducción a los fundamentos del diseño",
                "highlights": "universitario"

            }, {
                "id": "ne8",
                "text": "Introducción a los tipos constructivos",
                "highlights": "universitario"

            }, {
                "id": "ne9",
                "text": "Introducción a los tipos estructurales",
                "highlights": "universitario"

            }, {
                "id": "nf0",
                "text": "Introducción al pensamiento científico",
                "highlights": "universitario"

            }],

            'INTE': [{
                "id": "nc9",
                "text": "International english language testing system - IELTS",
                "highlights": "avanzado"

            }],

            'INTER': [{
                "id": "nc9",
                "text": "International english language testing system - IELTS",
                "highlights": "avanzado"

            }],

            'INTERN': [{
                "id": "nc9",
                "text": "International english language testing system - IELTS",
                "highlights": "avanzado"

            }],

            'INTERNA': [{
                "id": "nc9",
                "text": "International english language testing system - IELTS",
                "highlights": "avanzado"

            }],

            'INTERNAT': [{
                "id": "nc9",
                "text": "International english language testing system - IELTS",
                "highlights": "avanzado"

            }],

            'INTERNATI': [{
                "id": "nc9",
                "text": "International english language testing system - IELTS",
                "highlights": "avanzado"

            }],

            'INTERNATIO': [{
                "id": "nc9",
                "text": "International english language testing system - IELTS",
                "highlights": "avanzado"

            }],

            'INTERNATION': [{
                "id": "nc9",
                "text": "International english language testing system - IELTS",
                "highlights": "avanzado"

            }],

            'INTERNATIONA': [{
                "id": "nc9",
                "text": "International english language testing system - IELTS",
                "highlights": "avanzado"

            }],

            'INTERNATIONAL': [{
                "id": "nc9",
                "text": "International english language testing system - IELTS",
                "highlights": "avanzado"

            }],


            'INTR': [{
                "id": "nd0",
                "text": "Introducción a la administración",
                "highlights": "universitario"

            }, {
                "id": "nd1",
                "text": "Introducción a la arquitectura contemporánea",
                "highlights": "universitario"

            }, {
                "id": "nd2",
                "text": "Introducción a la biología celular",
                "highlights": "secundario"

            }, {
                "id": "nd3",
                "text": "Introducción a la enfermería en salud pública",
                "highlights": "universitario"

            }, {
                "id": "nd4",
                "text": "Introducción a la física",
                "highlights": "secundario"

            }, {
                "id": "nd5",
                "text": "Introducción a la geografía",
                "highlights": "universitario"

            }, {
                "id": "nd6",
                "text": "Introducción a la historia de la arquitectura",
                "highlights": "universitario"

            }, {
                "id": "nd7",
                "text": "Introducción a la ingeniería industrial",
                "highlights": "universitario"

            }, {
                "id": "nd8",
                "text": "Introducción a la matemática",
                "highlights": "universitario"

            }, {
                "id": "nd9",
                "text": "Introducción a la química",
                "highlights": "secundario"

            }, {
                "id": "ne0",
                "text": "Introducción al conocimiento de la sociedad y el estado",
                "highlights": "universitario"

            }, {
                "id": "ne1",
                "text": "Introducción al conocimiento proyectual I",
                "highlights": "universitario"

            }, {
                "id": "ne2",
                "text": "Introducción al conocimiento proyectual II",
                "highlights": "universitario"

            }, {
                "id": "ne3",
                "text": "Introducción al derecho",
                "highlights": "universitario"

            }, {
                "id": "ne4",
                "text": "Introducción al diseño y a la arquitectura moderna",
                "highlights": "universitario"

            }, {
                "id": "ne5",
                "text": "Introducción al estudio de las ciencias sociales",
                "highlights": "universitario"

            }, {
                "id": "ne6",
                "text": "Introducción a los estudios universitarios y la economía",
                "highlights": "universitario"

            }, {
                "id": "ne7",
                "text": "Introducción a los fundamentos del diseño",
                "highlights": "universitario"

            }, {
                "id": "ne8",
                "text": "Introducción a los tipos constructivos",
                "highlights": "universitario"

            }, {
                "id": "ne9",
                "text": "Introducción a los tipos estructurales",
                "highlights": "universitario"

            }, {
                "id": "nf0",
                "text": "Introducción al pensamiento científico",
                "highlights": "universitario"

            }],

            'INTRO': [{
                "id": "nd0",
                "text": "Introducción a la administración",
                "highlights": "universitario"

            }, {
                "id": "nd1",
                "text": "Introducción a la arquitectura contemporánea",
                "highlights": "universitario"

            }, {
                "id": "nd2",
                "text": "Introducción a la biología celular",
                "highlights": "secundario"

            }, {
                "id": "nd3",
                "text": "Introducción a la enfermería en salud pública",
                "highlights": "universitario"

            }, {
                "id": "nd4",
                "text": "Introducción a la física",
                "highlights": "secundario"

            }, {
                "id": "nd5",
                "text": "Introducción a la geografía",
                "highlights": "universitario"

            }, {
                "id": "nd6",
                "text": "Introducción a la historia de la arquitectura",
                "highlights": "universitario"

            }, {
                "id": "nd7",
                "text": "Introducción a la ingeniería industrial",
                "highlights": "universitario"

            }, {
                "id": "nd8",
                "text": "Introducción a la matemática",
                "highlights": "universitario"

            }, {
                "id": "nd9",
                "text": "Introducción a la química",
                "highlights": "secundario"

            }, {
                "id": "ne0",
                "text": "Introducción al conocimiento de la sociedad y el estado",
                "highlights": "universitario"

            }, {
                "id": "ne1",
                "text": "Introducción al conocimiento proyectual I",
                "highlights": "universitario"

            }, {
                "id": "ne2",
                "text": "Introducción al conocimiento proyectual II",
                "highlights": "universitario"

            }, {
                "id": "ne3",
                "text": "Introducción al derecho",
                "highlights": "universitario"

            }, {
                "id": "ne4",
                "text": "Introducción al diseño y a la arquitectura moderna",
                "highlights": "universitario"

            }, {
                "id": "ne5",
                "text": "Introducción al estudio de las ciencias sociales",
                "highlights": "universitario"

            }, {
                "id": "ne6",
                "text": "Introducción a los estudios universitarios y la economía",
                "highlights": "universitario"

            }, {
                "id": "ne7",
                "text": "Introducción a los fundamentos del diseño",
                "highlights": "universitario"

            }, {
                "id": "ne8",
                "text": "Introducción a los tipos constructivos",
                "highlights": "universitario"

            }, {
                "id": "ne9",
                "text": "Introducción a los tipos estructurales",
                "highlights": "universitario"

            }, {
                "id": "nf0",
                "text": "Introducción al pensamiento científico",
                "highlights": "universitario"

            }],


            'INTROD': [{
                "id": "nd0",
                "text": "Introducción a la administración",
                "highlights": "universitario"

            }, {
                "id": "nd1",
                "text": "Introducción a la arquitectura contemporánea",
                "highlights": "universitario"

            }, {
                "id": "nd2",
                "text": "Introducción a la biología celular",
                "highlights": "secundario"

            }, {
                "id": "nd3",
                "text": "Introducción a la enfermería en salud pública",
                "highlights": "universitario"

            }, {
                "id": "nd4",
                "text": "Introducción a la física",
                "highlights": "secundario"

            }, {
                "id": "nd5",
                "text": "Introducción a la geografía",
                "highlights": "universitario"

            }, {
                "id": "nd6",
                "text": "Introducción a la historia de la arquitectura",
                "highlights": "universitario"

            }, {
                "id": "nd7",
                "text": "Introducción a la ingeniería industrial",
                "highlights": "universitario"

            }, {
                "id": "nd8",
                "text": "Introducción a la matemática",
                "highlights": "universitario"

            }, {
                "id": "nd9",
                "text": "Introducción a la química",
                "highlights": "secundario"

            }, {
                "id": "ne0",
                "text": "Introducción al conocimiento de la sociedad y el estado",
                "highlights": "universitario"

            }, {
                "id": "ne1",
                "text": "Introducción al conocimiento proyectual I",
                "highlights": "universitario"

            }, {
                "id": "ne2",
                "text": "Introducción al conocimiento proyectual II",
                "highlights": "universitario"

            }, {
                "id": "ne3",
                "text": "Introducción al derecho",
                "highlights": "universitario"

            }, {
                "id": "ne4",
                "text": "Introducción al diseño y a la arquitectura moderna",
                "highlights": "universitario"

            }, {
                "id": "ne5",
                "text": "Introducción al estudio de las ciencias sociales",
                "highlights": "universitario"

            }, {
                "id": "ne6",
                "text": "Introducción a los estudios universitarios y la economía",
                "highlights": "universitario"

            }, {
                "id": "ne7",
                "text": "Introducción a los fundamentos del diseño",
                "highlights": "universitario"

            }, {
                "id": "ne8",
                "text": "Introducción a los tipos constructivos",
                "highlights": "universitario"

            }, {
                "id": "ne9",
                "text": "Introducción a los tipos estructurales",
                "highlights": "universitario"

            }, {
                "id": "nf0",
                "text": "Introducción al pensamiento científico",
                "highlights": "universitario"

            }],

            'INTRODU': [{
                "id": "nd0",
                "text": "Introducción a la administración",
                "highlights": "universitario"

            }, {
                "id": "nd1",
                "text": "Introducción a la arquitectura contemporánea",
                "highlights": "universitario"

            }, {
                "id": "nd2",
                "text": "Introducción a la biología celular",
                "highlights": "secundario"

            }, {
                "id": "nd3",
                "text": "Introducción a la enfermería en salud pública",
                "highlights": "universitario"

            }, {
                "id": "nd4",
                "text": "Introducción a la física",
                "highlights": "secundario"

            }, {
                "id": "nd5",
                "text": "Introducción a la geografía",
                "highlights": "universitario"

            }, {
                "id": "nd6",
                "text": "Introducción a la historia de la arquitectura",
                "highlights": "universitario"

            }, {
                "id": "nd7",
                "text": "Introducción a la ingeniería industrial",
                "highlights": "universitario"

            }, {
                "id": "nd8",
                "text": "Introducción a la matemática",
                "highlights": "universitario"

            }, {
                "id": "nd9",
                "text": "Introducción a la química",
                "highlights": "secundario"

            }, {
                "id": "ne0",
                "text": "Introducción al conocimiento de la sociedad y el estado",
                "highlights": "universitario"

            }, {
                "id": "ne1",
                "text": "Introducción al conocimiento proyectual I",
                "highlights": "universitario"

            }, {
                "id": "ne2",
                "text": "Introducción al conocimiento proyectual II",
                "highlights": "universitario"

            }, {
                "id": "ne3",
                "text": "Introducción al derecho",
                "highlights": "universitario"

            }, {
                "id": "ne4",
                "text": "Introducción al diseño y a la arquitectura moderna",
                "highlights": "universitario"

            }, {
                "id": "ne5",
                "text": "Introducción al estudio de las ciencias sociales",
                "highlights": "universitario"

            }, {
                "id": "ne6",
                "text": "Introducción a los estudios universitarios y la economía",
                "highlights": "universitario"

            }, {
                "id": "ne7",
                "text": "Introducción a los fundamentos del diseño",
                "highlights": "universitario"

            }, {
                "id": "ne8",
                "text": "Introducción a los tipos constructivos",
                "highlights": "universitario"

            }, {
                "id": "ne9",
                "text": "Introducción a los tipos estructurales",
                "highlights": "universitario"

            }, {
                "id": "nf0",
                "text": "Introducción al pensamiento científico",
                "highlights": "universitario"

            }],


            'INTRODUC': [{
                "id": "nd0",
                "text": "Introducción a la administración",
                "highlights": "universitario"

            }, {
                "id": "nd1",
                "text": "Introducción a la arquitectura contemporánea",
                "highlights": "universitario"

            }, {
                "id": "nd2",
                "text": "Introducción a la biología celular",
                "highlights": "secundario"

            }, {
                "id": "nd3",
                "text": "Introducción a la enfermería en salud pública",
                "highlights": "universitario"

            }, {
                "id": "nd4",
                "text": "Introducción a la física",
                "highlights": "secundario"

            }, {
                "id": "nd5",
                "text": "Introducción a la geografía",
                "highlights": "universitario"

            }, {
                "id": "nd6",
                "text": "Introducción a la historia de la arquitectura",
                "highlights": "universitario"

            }, {
                "id": "nd7",
                "text": "Introducción a la ingeniería industrial",
                "highlights": "universitario"

            }, {
                "id": "nd8",
                "text": "Introducción a la matemática",
                "highlights": "universitario"

            }, {
                "id": "nd9",
                "text": "Introducción a la química",
                "highlights": "secundario"

            }, {
                "id": "ne0",
                "text": "Introducción al conocimiento de la sociedad y el estado",
                "highlights": "universitario"

            }, {
                "id": "ne1",
                "text": "Introducción al conocimiento proyectual I",
                "highlights": "universitario"

            }, {
                "id": "ne2",
                "text": "Introducción al conocimiento proyectual II",
                "highlights": "universitario"

            }, {
                "id": "ne3",
                "text": "Introducción al derecho",
                "highlights": "universitario"

            }, {
                "id": "ne4",
                "text": "Introducción al diseño y a la arquitectura moderna",
                "highlights": "universitario"

            }, {
                "id": "ne5",
                "text": "Introducción al estudio de las ciencias sociales",
                "highlights": "universitario"

            }, {
                "id": "ne6",
                "text": "Introducción a los estudios universitarios y la economía",
                "highlights": "universitario"

            }, {
                "id": "ne7",
                "text": "Introducción a los fundamentos del diseño",
                "highlights": "universitario"

            }, {
                "id": "ne8",
                "text": "Introducción a los tipos constructivos",
                "highlights": "universitario"

            }, {
                "id": "ne9",
                "text": "Introducción a los tipos estructurales",
                "highlights": "universitario"

            }, {
                "id": "nf0",
                "text": "Introducción al pensamiento científico",
                "highlights": "universitario"

            }],

            'INTRODUCC': [{
                "id": "nd0",
                "text": "Introducción a la administración",
                "highlights": "universitario"

            }, {
                "id": "nd1",
                "text": "Introducción a la arquitectura contemporánea",
                "highlights": "universitario"

            }, {
                "id": "nd2",
                "text": "Introducción a la biología celular",
                "highlights": "secundario"

            }, {
                "id": "nd3",
                "text": "Introducción a la enfermería en salud pública",
                "highlights": "universitario"

            }, {
                "id": "nd4",
                "text": "Introducción a la física",
                "highlights": "secundario"

            }, {
                "id": "nd5",
                "text": "Introducción a la geografía",
                "highlights": "universitario"

            }, {
                "id": "nd6",
                "text": "Introducción a la historia de la arquitectura",
                "highlights": "universitario"

            }, {
                "id": "nd7",
                "text": "Introducción a la ingeniería industrial",
                "highlights": "universitario"

            }, {
                "id": "nd8",
                "text": "Introducción a la matemática",
                "highlights": "universitario"

            }, {
                "id": "nd9",
                "text": "Introducción a la química",
                "highlights": "secundario"

            }, {
                "id": "ne0",
                "text": "Introducción al conocimiento de la sociedad y el estado",
                "highlights": "universitario"

            }, {
                "id": "ne1",
                "text": "Introducción al conocimiento proyectual I",
                "highlights": "universitario"

            }, {
                "id": "ne2",
                "text": "Introducción al conocimiento proyectual II",
                "highlights": "universitario"

            }, {
                "id": "ne3",
                "text": "Introducción al derecho",
                "highlights": "universitario"

            }, {
                "id": "ne4",
                "text": "Introducción al diseño y a la arquitectura moderna",
                "highlights": "universitario"

            }, {
                "id": "ne5",
                "text": "Introducción al estudio de las ciencias sociales",
                "highlights": "universitario"

            }, {
                "id": "ne6",
                "text": "Introducción a los estudios universitarios y la economía",
                "highlights": "universitario"

            }, {
                "id": "ne7",
                "text": "Introducción a los fundamentos del diseño",
                "highlights": "universitario"

            }, {
                "id": "ne8",
                "text": "Introducción a los tipos constructivos",
                "highlights": "universitario"

            }, {
                "id": "ne9",
                "text": "Introducción a los tipos estructurales",
                "highlights": "universitario"

            }, {
                "id": "nf0",
                "text": "Introducción al pensamiento científico",
                "highlights": "universitario"

            }],

            'INTRODUCCI': [{
                "id": "nd0",
                "text": "Introducción a la administración",
                "highlights": "universitario"

            }, {
                "id": "nd1",
                "text": "Introducción a la arquitectura contemporánea",
                "highlights": "universitario"

            }, {
                "id": "nd2",
                "text": "Introducción a la biología celular",
                "highlights": "secundario"

            }, {
                "id": "nd3",
                "text": "Introducción a la enfermería en salud pública",
                "highlights": "universitario"

            }, {
                "id": "nd4",
                "text": "Introducción a la física",
                "highlights": "secundario"

            }, {
                "id": "nd5",
                "text": "Introducción a la geografía",
                "highlights": "universitario"

            }, {
                "id": "nd6",
                "text": "Introducción a la historia de la arquitectura",
                "highlights": "universitario"

            }, {
                "id": "nd7",
                "text": "Introducción a la ingeniería industrial",
                "highlights": "universitario"

            }, {
                "id": "nd8",
                "text": "Introducción a la matemática",
                "highlights": "universitario"

            }, {
                "id": "nd9",
                "text": "Introducción a la química",
                "highlights": "secundario"

            }, {
                "id": "ne0",
                "text": "Introducción al conocimiento de la sociedad y el estado",
                "highlights": "universitario"

            }, {
                "id": "ne1",
                "text": "Introducción al conocimiento proyectual I",
                "highlights": "universitario"

            }, {
                "id": "ne2",
                "text": "Introducción al conocimiento proyectual II",
                "highlights": "universitario"

            }, {
                "id": "ne3",
                "text": "Introducción al derecho",
                "highlights": "universitario"

            }, {
                "id": "ne4",
                "text": "Introducción al diseño y a la arquitectura moderna",
                "highlights": "universitario"

            }, {
                "id": "ne5",
                "text": "Introducción al estudio de las ciencias sociales",
                "highlights": "universitario"

            }, {
                "id": "ne6",
                "text": "Introducción a los estudios universitarios y la economía",
                "highlights": "universitario"

            }, {
                "id": "ne7",
                "text": "Introducción a los fundamentos del diseño",
                "highlights": "universitario"

            }, {
                "id": "ne8",
                "text": "Introducción a los tipos constructivos",
                "highlights": "universitario"

            }, {
                "id": "ne9",
                "text": "Introducción a los tipos estructurales",
                "highlights": "universitario"

            }, {
                "id": "nf0",
                "text": "Introducción al pensamiento científico",
                "highlights": "universitario"

            }],

            'INTRODUCCIO': [{
                "id": "nd0",
                "text": "Introducción a la administración",
                "highlights": "universitario"

            }, {
                "id": "nd1",
                "text": "Introducción a la arquitectura contemporánea",
                "highlights": "universitario"

            }, {
                "id": "nd2",
                "text": "Introducción a la biología celular",
                "highlights": "secundario"

            }, {
                "id": "nd3",
                "text": "Introducción a la enfermería en salud pública",
                "highlights": "universitario"

            }, {
                "id": "nd4",
                "text": "Introducción a la física",
                "highlights": "secundario"

            }, {
                "id": "nd5",
                "text": "Introducción a la geografía",
                "highlights": "universitario"

            }, {
                "id": "nd6",
                "text": "Introducción a la historia de la arquitectura",
                "highlights": "universitario"

            }, {
                "id": "nd7",
                "text": "Introducción a la ingeniería industrial",
                "highlights": "universitario"

            }, {
                "id": "nd8",
                "text": "Introducción a la matemática",
                "highlights": "universitario"

            }, {
                "id": "nd9",
                "text": "Introducción a la química",
                "highlights": "secundario"

            }, {
                "id": "ne0",
                "text": "Introducción al conocimiento de la sociedad y el estado",
                "highlights": "universitario"

            }, {
                "id": "ne1",
                "text": "Introducción al conocimiento proyectual I",
                "highlights": "universitario"

            }, {
                "id": "ne2",
                "text": "Introducción al conocimiento proyectual II",
                "highlights": "universitario"

            }, {
                "id": "ne3",
                "text": "Introducción al derecho",
                "highlights": "universitario"

            }, {
                "id": "ne4",
                "text": "Introducción al diseño y a la arquitectura moderna",
                "highlights": "universitario"

            }, {
                "id": "ne5",
                "text": "Introducción al estudio de las ciencias sociales",
                "highlights": "universitario"

            }, {
                "id": "ne6",
                "text": "Introducción a los estudios universitarios y la economía",
                "highlights": "universitario"

            }, {
                "id": "ne7",
                "text": "Introducción a los fundamentos del diseño",
                "highlights": "universitario"

            }, {
                "id": "ne8",
                "text": "Introducción a los tipos constructivos",
                "highlights": "universitario"

            }, {
                "id": "ne9",
                "text": "Introducción a los tipos estructurales",
                "highlights": "universitario"

            }, {
                "id": "nf0",
                "text": "Introducción al pensamiento científico",
                "highlights": "universitario"

            }],

            'INTRODUCCION': [{
                "id": "nd0",
                "text": "Introducción a la administración",
                "highlights": "universitario"

            }, {
                "id": "nd1",
                "text": "Introducción a la arquitectura contemporánea",
                "highlights": "universitario"

            }, {
                "id": "nd2",
                "text": "Introducción a la biología celular",
                "highlights": "secundario"

            }, {
                "id": "nd3",
                "text": "Introducción a la enfermería en salud pública",
                "highlights": "universitario"

            }, {
                "id": "nd4",
                "text": "Introducción a la física",
                "highlights": "secundario"

            }, {
                "id": "nd5",
                "text": "Introducción a la geografía",
                "highlights": "universitario"

            }, {
                "id": "nd6",
                "text": "Introducción a la historia de la arquitectura",
                "highlights": "universitario"

            }, {
                "id": "nd7",
                "text": "Introducción a la ingeniería industrial",
                "highlights": "universitario"

            }, {
                "id": "nd8",
                "text": "Introducción a la matemática",
                "highlights": "universitario"

            }, {
                "id": "nd9",
                "text": "Introducción a la química",
                "highlights": "secundario"

            }, {
                "id": "ne0",
                "text": "Introducción al conocimiento de la sociedad y el estado",
                "highlights": "universitario"

            }, {
                "id": "ne1",
                "text": "Introducción al conocimiento proyectual I",
                "highlights": "universitario"

            }, {
                "id": "ne2",
                "text": "Introducción al conocimiento proyectual II",
                "highlights": "universitario"

            }, {
                "id": "ne3",
                "text": "Introducción al derecho",
                "highlights": "universitario"

            }, {
                "id": "ne4",
                "text": "Introducción al diseño y a la arquitectura moderna",
                "highlights": "universitario"

            }, {
                "id": "ne5",
                "text": "Introducción al estudio de las ciencias sociales",
                "highlights": "universitario"

            }, {
                "id": "ne6",
                "text": "Introducción a los estudios universitarios y la economía",
                "highlights": "universitario"

            }, {
                "id": "ne7",
                "text": "Introducción a los fundamentos del diseño",
                "highlights": "universitario"

            }, {
                "id": "ne8",
                "text": "Introducción a los tipos constructivos",
                "highlights": "universitario"

            }, {
                "id": "ne9",
                "text": "Introducción a los tipos estructurales",
                "highlights": "universitario"

            }, {
                "id": "nf0",
                "text": "Introducción al pensamiento científico",
                "highlights": "universitario"

            }],





            'L': [


                {
                    "id": "nf4",
                    "text": "Laboratorio de algoritmos y estructura de datos",
                    "highlights": "secundario"

                }, {
                    "id": "zf4",
                    "text": "Laboratorio de programación orientada a objetos",
                    "highlights": "secundario"

                }, {
                    "id": "nf5",
                    "text": "Laboratorio de tecnología de la información en las organizaciones",
                    "highlights": "universitario"

                }, {
                    "id": "nf6",
                    "text": "Latín I",
                    "highlights": "universitario"

                }, {
                    "id": "nf8",
                    "text": "Latín II",
                    "highlights": "universitario"

                }, {
                    "id": "nf9",
                    "text": "Lenguaje musical I",
                    "highlights": "tertiary",

                }, {
                    "id": "ng0",
                    "text": "Lenguaje musical II",
                    "highlights": "tertiary",

                }, {
                    "id": "ng1",
                    "text": "Lenguaje musical III",
                    "highlights": "tertiary",

                }, {
                    "id": "ng2",
                    "text": "Lenguajes electrónicos",
                    "highlights": "secundario"

                }, {
                    "id": "ng3",
                    "text": "Lengua y cultura griega I",
                    "highlights": "universitario"

                }, {
                    "id": "ng5",
                    "text": "Lengua y cultura latina II",
                    "highlights": "universitario"

                }, {
                    "id": "ng6",
                    "text": "Lengua y literatura",
                    "highlights": "secundario"

                }, {
                    "id": "ng7",
                    "text": "Lingüística I",
                    "highlights": "universitario"

                }, {
                    "id": "ng8",
                    "text": "Lingüística II",
                    "highlights": "universitario"

                }, {
                    "id": "ng9",
                    "text": "Literatura",
                    "highlights": "secundario"

                }, {
                    "id": "nh0",
                    "text": "Lógica y epistemología de las ciencias",
                    "highlights": "universitario"

                }

            ],


            'LA': [


                {
                    "id": "nf4",
                    "text": "Laboratorio de algoritmos y estructura de datos",
                    "highlights": "secundario"

                }, {
                    "id": "zf4",
                    "text": "Laboratorio de programación orientada a objetos",
                    "highlights": "secundario"

                }, {
                    "id": "nf5",
                    "text": "Laboratorio de tecnología de la información en las organizaciones",
                    "highlights": "universitario"

                }, {
                    "id": "nf6",
                    "text": "Latín I",
                    "highlights": "universitario"

                }, {
                    "id": "nf8",
                    "text": "Latín II",
                    "highlights": "universitario"

                }
            ],

            'LAB': [


                {
                    "id": "nf4",
                    "text": "Laboratorio de algoritmos y estructura de datos",
                    "highlights": "secundario"

                }, {
                    "id": "zf4",
                    "text": "Laboratorio de programación orientada a objetos",
                    "highlights": "secundario"

                }, {
                    "id": "nf5",
                    "text": "Laboratorio de tecnología de la información en las organizaciones",
                    "highlights": "universitario"

                }
            ],

            'LABO': [


                {
                    "id": "nf4",
                    "text": "Laboratorio de algoritmos y estructura de datos",
                    "highlights": "secundario"

                }, {
                    "id": "zf4",
                    "text": "Laboratorio de programación orientada a objetos",
                    "highlights": "secundario"

                }, {
                    "id": "nf5",
                    "text": "Laboratorio de tecnología de la información en las organizaciones",
                    "highlights": "universitario"

                }
            ],

            'LABOR': [


                {
                    "id": "nf4",
                    "text": "Laboratorio de algoritmos y estructura de datos",
                    "highlights": "secundario"

                }, {
                    "id": "zf4",
                    "text": "Laboratorio de programación orientada a objetos",
                    "highlights": "secundario"

                }, {
                    "id": "nf5",
                    "text": "Laboratorio de tecnología de la información en las organizaciones",
                    "highlights": "universitario"

                }
            ],


            'LABORA': [


                {
                    "id": "nf4",
                    "text": "Laboratorio de algoritmos y estructura de datos",
                    "highlights": "secundario"

                }, {
                    "id": "zf4",
                    "text": "Laboratorio de programación orientada a objetos",
                    "highlights": "secundario"

                }, {
                    "id": "nf5",
                    "text": "Laboratorio de tecnología de la información en las organizaciones",
                    "highlights": "universitario"

                }
            ],

            'LABORAT': [


                {
                    "id": "nf4",
                    "text": "Laboratorio de algoritmos y estructura de datos",
                    "highlights": "secundario"

                }, {
                    "id": "zf4",
                    "text": "Laboratorio de programación orientada a objetos",
                    "highlights": "secundario"

                }, {
                    "id": "nf5",
                    "text": "Laboratorio de tecnología de la información en las organizaciones",
                    "highlights": "universitario"

                }
            ],

            'LABORATO': [


                {
                    "id": "nf4",
                    "text": "Laboratorio de algoritmos y estructura de datos",
                    "highlights": "secundario"

                }, {
                    "id": "zf4",
                    "text": "Laboratorio de programación orientada a objetos",
                    "highlights": "secundario"

                }, {
                    "id": "nf5",
                    "text": "Laboratorio de tecnología de la información en las organizaciones",
                    "highlights": "universitario"

                }
            ],

            'LABORATOR': [


                {
                    "id": "nf4",
                    "text": "Laboratorio de algoritmos y estructura de datos",
                    "highlights": "secundario"

                }, {
                    "id": "zf4",
                    "text": "Laboratorio de programación orientada a objetos",
                    "highlights": "secundario"

                }, {
                    "id": "nf5",
                    "text": "Laboratorio de tecnología de la información en las organizaciones",
                    "highlights": "universitario"

                }
            ],

            'LABORATORI': [


                {
                    "id": "nf4",
                    "text": "Laboratorio de algoritmos y estructura de datos",
                    "highlights": "secundario"

                }, {
                    "id": "zf4",
                    "text": "Laboratorio de programación orientada a objetos",
                    "highlights": "secundario"

                }, {
                    "id": "nf5",
                    "text": "Laboratorio de tecnología de la información en las organizaciones",
                    "highlights": "universitario"

                }
            ],


            'LABORATORIO': [


                {
                    "id": "nf4",
                    "text": "Laboratorio de algoritmos y estructura de datos",
                    "highlights": "secundario"

                }, {
                    "id": "zf4",
                    "text": "Laboratorio de programación orientada a objetos",
                    "highlights": "secundario"

                }, {
                    "id": "nf5",
                    "text": "Laboratorio de tecnología de la información en las organizaciones",
                    "highlights": "universitario"

                }
            ],


            'LE': [

                {
                    "id": "nf9",
                    "text": "Lenguaje musical I",
                    "highlights": "tertiary",

                }, {
                    "id": "ng0",
                    "text": "Lenguaje musical II",
                    "highlights": "tertiary",

                }, {
                    "id": "ng1",
                    "text": "Lenguaje musical III",
                    "highlights": "tertiary",

                }, {
                    "id": "ng2",
                    "text": "Lenguajes electrónicos",
                    "highlights": "secundario"

                }, {
                    "id": "ng3",
                    "text": "Lengua y cultura griega I",
                    "highlights": "universitario"

                }, {
                    "id": "ng5",
                    "text": "Lengua y cultura latina II",
                    "highlights": "universitario"

                }, {
                    "id": "ng6",
                    "text": "Lengua y literatura",
                    "highlights": "secundario"

                }
            ],

            'LEN': [

                {
                    "id": "nf9",
                    "text": "Lenguaje musical I",
                    "highlights": "tertiary",

                }, {
                    "id": "ng0",
                    "text": "Lenguaje musical II",
                    "highlights": "tertiary",

                }, {
                    "id": "ng1",
                    "text": "Lenguaje musical III",
                    "highlights": "tertiary",

                }, {
                    "id": "ng2",
                    "text": "Lenguajes electrónicos",
                    "highlights": "secundario"

                }, {
                    "id": "ng3",
                    "text": "Lengua y cultura griega I",
                    "highlights": "universitario"

                }, {
                    "id": "ng5",
                    "text": "Lengua y cultura latina II",
                    "highlights": "universitario"

                }, {
                    "id": "ng6",
                    "text": "Lengua y literatura",
                    "highlights": "secundario"

                }
            ],

            'LENG': [

                {
                    "id": "nf9",
                    "text": "Lenguaje musical I",
                    "highlights": "tertiary",

                }, {
                    "id": "ng0",
                    "text": "Lenguaje musical II",
                    "highlights": "tertiary",

                }, {
                    "id": "ng1",
                    "text": "Lenguaje musical III",
                    "highlights": "tertiary",

                }, {
                    "id": "ng2",
                    "text": "Lenguajes electrónicos",
                    "highlights": "secundario"

                }, {
                    "id": "ng3",
                    "text": "Lengua y cultura griega I",
                    "highlights": "universitario"

                }, {
                    "id": "ng5",
                    "text": "Lengua y cultura latina II",
                    "highlights": "universitario"

                }, {
                    "id": "ng6",
                    "text": "Lengua y literatura",
                    "highlights": "secundario"

                }
            ],

            'LENGU': [

                {
                    "id": "nf9",
                    "text": "Lenguaje musical I",
                    "highlights": "tertiary",

                }, {
                    "id": "ng0",
                    "text": "Lenguaje musical II",
                    "highlights": "tertiary",

                }, {
                    "id": "ng1",
                    "text": "Lenguaje musical III",
                    "highlights": "tertiary",

                }, {
                    "id": "ng2",
                    "text": "Lenguajes electrónicos",
                    "highlights": "secundario"

                }, {
                    "id": "ng3",
                    "text": "Lengua y cultura griega I",
                    "highlights": "universitario"

                }, {
                    "id": "ng5",
                    "text": "Lengua y cultura latina II",
                    "highlights": "universitario"

                }, {
                    "id": "ng6",
                    "text": "Lengua y literatura",
                    "highlights": "secundario"

                }
            ],

            'LENGUA': [

                {
                    "id": "nf9",
                    "text": "Lenguaje musical I",
                    "highlights": "tertiary",

                }, {
                    "id": "ng0",
                    "text": "Lenguaje musical II",
                    "highlights": "tertiary",

                }, {
                    "id": "ng1",
                    "text": "Lenguaje musical III",
                    "highlights": "tertiary",

                }, {
                    "id": "ng2",
                    "text": "Lenguajes electrónicos",
                    "highlights": "secundario"

                }, {
                    "id": "ng3",
                    "text": "Lengua y cultura griega I",
                    "highlights": "universitario"

                }, {
                    "id": "ng5",
                    "text": "Lengua y cultura latina II",
                    "highlights": "universitario"

                }, {
                    "id": "ng6",
                    "text": "Lengua y literatura",
                    "highlights": "secundario"

                }
            ],

            'LENGUAJ': [

                {
                    "id": "nf9",
                    "text": "Lenguaje musical I",
                    "highlights": "tertiary",

                }, {
                    "id": "ng0",
                    "text": "Lenguaje musical II",
                    "highlights": "tertiary",

                }, {
                    "id": "ng1",
                    "text": "Lenguaje musical III",
                    "highlights": "tertiary",

                }, {
                    "id": "ng2",
                    "text": "Lenguajes electrónicos",
                    "highlights": "secundario"

                }, {
                    "id": "ng3",
                    "text": "Lengua y cultura griega I",
                    "highlights": "universitario"

                }, {
                    "id": "ng5",
                    "text": "Lengua y cultura latina II",
                    "highlights": "universitario"

                }, {
                    "id": "ng6",
                    "text": "Lengua y literatura",
                    "highlights": "secundario"

                }
            ],

            'LENGUAJE': [

                {
                    "id": "nf9",
                    "text": "Lenguaje musical I",
                    "highlights": "tertiary",

                }, {
                    "id": "ng0",
                    "text": "Lenguaje musical II",
                    "highlights": "tertiary",

                }, {
                    "id": "ng1",
                    "text": "Lenguaje musical III",
                    "highlights": "tertiary",

                }, {
                    "id": "ng2",
                    "text": "Lenguajes electrónicos",
                    "highlights": "secundario"

                }, {
                    "id": "ng3",
                    "text": "Lengua y cultura griega I",
                    "highlights": "universitario"

                }, {
                    "id": "ng5",
                    "text": "Lengua y cultura latina II",
                    "highlights": "universitario"

                }, {
                    "id": "ng6",
                    "text": "Lengua y literatura",
                    "highlights": "secundario"

                }
            ],



            'LI': [

                {
                    "id": "ng8",
                    "text": "Lingüística II",
                    "highlights": "universitario"

                }, {
                    "id": "ng9",
                    "text": "Literatura",
                    "highlights": "secundario"

                }

            ],

            'LIN': [

                {
                    "id": "ng8",
                    "text": "Lingüística II",
                    "highlights": "universitario"

                }
            ],

            'LING': [

                {
                    "id": "ng8",
                    "text": "Lingüística II",
                    "highlights": "universitario"

                }

            ],

            'LINGU': [

                {
                    "id": "ng8",
                    "text": "Lingüística II",
                    "highlights": "universitario"

                }

            ],


            'LINGUI': [

                {
                    "id": "ng8",
                    "text": "Lingüística II",
                    "highlights": "universitario"

                }

            ],

            'LINGUIS': [

                {
                    "id": "ng8",
                    "text": "Lingüística II",
                    "highlights": "universitario"

                }

            ],

            'LINGUIST': [

                {
                    "id": "ng8",
                    "text": "Lingüística II",
                    "highlights": "universitario"

                }

            ],

            'LINGUISTI': [

                {
                    "id": "ng8",
                    "text": "Lingüística II",
                    "highlights": "universitario"

                }

            ],

            'LINGUISTIC': [

                {
                    "id": "ng8",
                    "text": "Lingüística II",
                    "highlights": "universitario"

                }

            ],

            'LINGUISTICA': [

                {
                    "id": "ng8",
                    "text": "Lingüística II",
                    "highlights": "universitario"

                }

            ],


            'LIT': [

                {
                    "id": "ng9",
                    "text": "Literatura",
                    "highlights": "secundario"

                }

            ],

            'LITE': [

                {
                    "id": "ng9",
                    "text": "Literatura",
                    "highlights": "secundario"

                }

            ],

            'LITER': [

                {
                    "id": "ng9",
                    "text": "Literatura",
                    "highlights": "secundario"

                }

            ],


            'LITERA': [

                {
                    "id": "ng9",
                    "text": "Literatura",
                    "highlights": "secundario"

                }

            ],

            'LITERAT': [

                {
                    "id": "ng9",
                    "text": "Literatura",
                    "highlights": "secundario"

                }

            ],

            'LITERATU': [

                {
                    "id": "ng9",
                    "text": "Literatura",
                    "highlights": "secundario"

                }

            ],

            'LITERATUR': [

                {
                    "id": "ng9",
                    "text": "Literatura",
                    "highlights": "secundario"

                }

            ],

            'LITERATURA': [

                {
                    "id": "ng9",
                    "text": "Literatura",
                    "highlights": "secundario"

                }

            ],


            'LO': [{
                    "id": "nh0",
                    "text": "Lógica y epistemología de las ciencias",
                    "highlights": "universitario"

                }

            ],


            'LOG': [{
                    "id": "nh0",
                    "text": "Lógica y epistemología de las ciencias",
                    "highlights": "universitario"

                }

            ],

            'LOGI': [{
                    "id": "nh0",
                    "text": "Lógica y epistemología de las ciencias",
                    "highlights": "universitario"

                }

            ],

            'LOGIC': [{
                    "id": "nh0",
                    "text": "Lógica y epistemología de las ciencias",
                    "highlights": "universitario"

                }

            ],

            'LOGICA': [{
                    "id": "nh0",
                    "text": "Lógica y epistemología de las ciencias",
                    "highlights": "universitario"

                }

            ],






            'M': [


                {
                    "id": "nh1",
                    "text": "Macroeconomía I",
                    "highlights": "universitario"

                }, {
                    "id": "nh2",
                    "text": "Matemática",
                    "highlights": "primaria",

                }, {
                    "id": "nh3",
                    "text": "Matemática",
                    "highlights": "secundario"

                }, {
                    "id": "nh4",
                    "text": "Matemática",
                    "highlights": "tertiary",

                }, {
                    "id": "nh5",
                    "text": "Matemática",
                    "highlights": "universitario"

                }, {
                    "id": "nh6",
                    "text": "Matemática aplicada",
                    "highlights": "secundario"

                }, {
                    "id": "nh7",
                    "text": "Matemática financiera",
                    "highlights": "universitario"

                }, {
                    "id": "nh8",
                    "text": "Matemática I A",
                    "highlights": "universitario"

                }, {
                    "id": "nh9",
                    "text": "Matemática I B",
                    "highlights": "universitario"

                }, {
                    "id": "ni0",
                    "text": "Matemática II",
                    "highlights": "universitario"

                }, {
                    "id": "ni1",
                    "text": "Matemática II A",
                    "highlights": "universitario"

                }, {
                    "id": "ni2",
                    "text": "Matemática II B",
                    "highlights": "universitario"

                }, {
                    "id": "ni3",
                    "text": "Matemáticas",
                    "highlights": "universitario"

                }, {
                    "id": "ni4",
                    "text": "Medicina familiar I",
                    "highlights": "universitario"

                }, {
                    "id": "ni5",
                    "text": "Medios de representación",
                    "highlights": "universitario"

                }, {
                    "id": "ni6",
                    "text": "Medios expresivos I",
                    "highlights": "universitario"

                }, {
                    "id": "ni7",
                    "text": "Metodología de la investigación en salud",
                    "highlights": "universitario"

                }, {
                    "id": "ni8",
                    "text": "Metodología de las ciencias sociales",
                    "highlights": "universitario"

                }, {
                    "id": "ni9",
                    "text": "Metodología y técnicas de estudio",
                    "highlights": "secundario"

                }, {
                    "id": "nj0",
                    "text": "Microbiología y parasitología",
                    "highlights": "universitario"

                }, {
                    "id": "nj1",
                    "text": "Microbiología y parasitología I",
                    "highlights": "universitario"

                }, {
                    "id": "nj2",
                    "text": "Microbiología y parasitología II",
                    "highlights": "universitario"

                }, {
                    "id": "nj3",
                    "text": "Microeconomía",
                    "highlights": "universitario"

                }, {
                    "id": "nj4",
                    "text": "Modelado 3D",
                    "highlights": "universitario"

                }, {
                    "id": "nj5",
                    "text": "Modelos estadísticos",
                    "highlights": "universitario"

                }, {
                    "id": "nj6",
                    "text": "Modelos y sistemas",
                    "highlights": "secundario"

                }, {
                    "id": "nj7",
                    "text": "Morfología",
                    "highlights": "universitario"

                }, {
                    "id": "nj8",
                    "text": "Morfología I",
                    "highlights": "universitario"

                }, {
                    "id": "nj9",
                    "text": "Música",
                    "highlights": "secundario"

                }

            ],

            'MA': [{
                "id": "nh1",
                "text": "Macroeconomía I",
                "highlights": "universitario"

            }, {
                "id": "nh2",
                "text": "Matemática",
                "highlights": "primaria",

            }, {
                "id": "nh3",
                "text": "Matemática",
                "highlights": "secundario"

            }, {
                "id": "nh4",
                "text": "Matemática",
                "highlights": "tertiary",

            }, {
                "id": "nh5",
                "text": "Matemática",
                "highlights": "universitario"

            }, {
                "id": "nh6",
                "text": "Matemática aplicada",
                "highlights": "secundario"

            }, {
                "id": "nh7",
                "text": "Matemática financiera",
                "highlights": "universitario"

            }, {
                "id": "nh8",
                "text": "Matemática I A",
                "highlights": "universitario"

            }, {
                "id": "nh9",
                "text": "Matemática I B",
                "highlights": "universitario"

            }, {
                "id": "ni0",
                "text": "Matemática II",
                "highlights": "universitario"

            }, {
                "id": "ni1",
                "text": "Matemática II A",
                "highlights": "universitario"

            }, {
                "id": "ni2",
                "text": "Matemática II B",
                "highlights": "universitario"

            }, {
                "id": "ni3",
                "text": "Matemáticas",
                "highlights": "universitario"

            }],


            'MAC': [{
                    "id": "nh1",
                    "text": "Macroeconomía I",
                    "highlights": "universitario"

                }

            ],

            'MAT': [

                {
                    "id": "nh2",
                    "text": "Matemática",
                    "highlights": "primaria",

                }, {
                    "id": "nh3",
                    "text": "Matemática",
                    "highlights": "secundario"

                }, {
                    "id": "nh4",
                    "text": "Matemática",
                    "highlights": "tertiary",

                }, {
                    "id": "nh5",
                    "text": "Matemática",
                    "highlights": "universitario"

                }, {
                    "id": "nh6",
                    "text": "Matemática aplicada",
                    "highlights": "secundario"

                }, {
                    "id": "nh7",
                    "text": "Matemática financiera",
                    "highlights": "universitario"

                }, {
                    "id": "nh8",
                    "text": "Matemática I A",
                    "highlights": "universitario"

                }, {
                    "id": "nh9",
                    "text": "Matemática I B",
                    "highlights": "universitario"

                }, {
                    "id": "ni0",
                    "text": "Matemática II",
                    "highlights": "universitario"

                }, {
                    "id": "ni1",
                    "text": "Matemática II A",
                    "highlights": "universitario"

                }, {
                    "id": "ni2",
                    "text": "Matemática II B",
                    "highlights": "universitario"

                }, {
                    "id": "ni3",
                    "text": "Matemáticas",
                    "highlights": "universitario"

                }
            ],

            'MATE': [

                {
                    "id": "nh2",
                    "text": "Matemática",
                    "highlights": "primaria",

                }, {
                    "id": "nh3",
                    "text": "Matemática",
                    "highlights": "secundario"

                }, {
                    "id": "nh4",
                    "text": "Matemática",
                    "highlights": "tertiary",

                }, {
                    "id": "nh5",
                    "text": "Matemática",
                    "highlights": "universitario"

                }, {
                    "id": "nh6",
                    "text": "Matemática aplicada",
                    "highlights": "secundario"

                }, {
                    "id": "nh7",
                    "text": "Matemática financiera",
                    "highlights": "universitario"

                }, {
                    "id": "nh8",
                    "text": "Matemática I A",
                    "highlights": "universitario"

                }, {
                    "id": "nh9",
                    "text": "Matemática I B",
                    "highlights": "universitario"

                }, {
                    "id": "ni0",
                    "text": "Matemática II",
                    "highlights": "universitario"

                }, {
                    "id": "ni1",
                    "text": "Matemática II A",
                    "highlights": "universitario"

                }, {
                    "id": "ni2",
                    "text": "Matemática II B",
                    "highlights": "universitario"

                }, {
                    "id": "ni3",
                    "text": "Matemáticas",
                    "highlights": "universitario"

                }
            ],

            'MATEM': [

                {
                    "id": "nh2",
                    "text": "Matemática",
                    "highlights": "primaria",

                }, {
                    "id": "nh3",
                    "text": "Matemática",
                    "highlights": "secundario"

                }, {
                    "id": "nh4",
                    "text": "Matemática",
                    "highlights": "tertiary",

                }, {
                    "id": "nh5",
                    "text": "Matemática",
                    "highlights": "universitario"

                }, {
                    "id": "nh6",
                    "text": "Matemática aplicada",
                    "highlights": "secundario"

                }, {
                    "id": "nh7",
                    "text": "Matemática financiera",
                    "highlights": "universitario"

                }, {
                    "id": "nh8",
                    "text": "Matemática I A",
                    "highlights": "universitario"

                }, {
                    "id": "nh9",
                    "text": "Matemática I B",
                    "highlights": "universitario"

                }, {
                    "id": "ni0",
                    "text": "Matemática II",
                    "highlights": "universitario"

                }, {
                    "id": "ni1",
                    "text": "Matemática II A",
                    "highlights": "universitario"

                }, {
                    "id": "ni2",
                    "text": "Matemática II B",
                    "highlights": "universitario"

                }, {
                    "id": "ni3",
                    "text": "Matemáticas",
                    "highlights": "universitario"

                }
            ],

            'MATEMA': [

                {
                    "id": "nh2",
                    "text": "Matemática",
                    "highlights": "primaria",

                }, {
                    "id": "nh3",
                    "text": "Matemática",
                    "highlights": "secundario"

                }, {
                    "id": "nh4",
                    "text": "Matemática",
                    "highlights": "tertiary",

                }, {
                    "id": "nh5",
                    "text": "Matemática",
                    "highlights": "universitario"

                }, {
                    "id": "nh6",
                    "text": "Matemática aplicada",
                    "highlights": "secundario"

                }, {
                    "id": "nh7",
                    "text": "Matemática financiera",
                    "highlights": "universitario"

                }, {
                    "id": "nh8",
                    "text": "Matemática I A",
                    "highlights": "universitario"

                }, {
                    "id": "nh9",
                    "text": "Matemática I B",
                    "highlights": "universitario"

                }, {
                    "id": "ni0",
                    "text": "Matemática II",
                    "highlights": "universitario"

                }, {
                    "id": "ni1",
                    "text": "Matemática II A",
                    "highlights": "universitario"

                }, {
                    "id": "ni2",
                    "text": "Matemática II B",
                    "highlights": "universitario"

                }, {
                    "id": "ni3",
                    "text": "Matemáticas",
                    "highlights": "universitario"

                }
            ],

            'MATEMAT': [

                {
                    "id": "nh2",
                    "text": "Matemática",
                    "highlights": "primaria",

                }, {
                    "id": "nh3",
                    "text": "Matemática",
                    "highlights": "secundario"

                }, {
                    "id": "nh4",
                    "text": "Matemática",
                    "highlights": "tertiary",

                }, {
                    "id": "nh5",
                    "text": "Matemática",
                    "highlights": "universitario"

                }, {
                    "id": "nh6",
                    "text": "Matemática aplicada",
                    "highlights": "secundario"

                }, {
                    "id": "nh7",
                    "text": "Matemática financiera",
                    "highlights": "universitario"

                }, {
                    "id": "nh8",
                    "text": "Matemática I A",
                    "highlights": "universitario"

                }, {
                    "id": "nh9",
                    "text": "Matemática I B",
                    "highlights": "universitario"

                }, {
                    "id": "ni0",
                    "text": "Matemática II",
                    "highlights": "universitario"

                }, {
                    "id": "ni1",
                    "text": "Matemática II A",
                    "highlights": "universitario"

                }, {
                    "id": "ni2",
                    "text": "Matemática II B",
                    "highlights": "universitario"

                }, {
                    "id": "ni3",
                    "text": "Matemáticas",
                    "highlights": "universitario"

                }
            ],

            'MATEMATI': [

                {
                    "id": "nh2",
                    "text": "Matemática",
                    "highlights": "primaria",

                }, {
                    "id": "nh3",
                    "text": "Matemática",
                    "highlights": "secundario"

                }, {
                    "id": "nh4",
                    "text": "Matemática",
                    "highlights": "tertiary",

                }, {
                    "id": "nh5",
                    "text": "Matemática",
                    "highlights": "universitario"

                }, {
                    "id": "nh6",
                    "text": "Matemática aplicada",
                    "highlights": "secundario"

                }, {
                    "id": "nh7",
                    "text": "Matemática financiera",
                    "highlights": "universitario"

                }, {
                    "id": "nh8",
                    "text": "Matemática I A",
                    "highlights": "universitario"

                }, {
                    "id": "nh9",
                    "text": "Matemática I B",
                    "highlights": "universitario"

                }, {
                    "id": "ni0",
                    "text": "Matemática II",
                    "highlights": "universitario"

                }, {
                    "id": "ni1",
                    "text": "Matemática II A",
                    "highlights": "universitario"

                }, {
                    "id": "ni2",
                    "text": "Matemática II B",
                    "highlights": "universitario"

                }, {
                    "id": "ni3",
                    "text": "Matemáticas",
                    "highlights": "universitario"

                }
            ],

            'MATEMATIC': [

                {
                    "id": "nh2",
                    "text": "Matemática",
                    "highlights": "primaria",

                }, {
                    "id": "nh3",
                    "text": "Matemática",
                    "highlights": "secundario"

                }, {
                    "id": "nh4",
                    "text": "Matemática",
                    "highlights": "tertiary",

                }, {
                    "id": "nh5",
                    "text": "Matemática",
                    "highlights": "universitario"

                }, {
                    "id": "nh6",
                    "text": "Matemática aplicada",
                    "highlights": "secundario"

                }, {
                    "id": "nh7",
                    "text": "Matemática financiera",
                    "highlights": "universitario"

                }, {
                    "id": "nh8",
                    "text": "Matemática I A",
                    "highlights": "universitario"

                }, {
                    "id": "nh9",
                    "text": "Matemática I B",
                    "highlights": "universitario"

                }, {
                    "id": "ni0",
                    "text": "Matemática II",
                    "highlights": "universitario"

                }, {
                    "id": "ni1",
                    "text": "Matemática II A",
                    "highlights": "universitario"

                }, {
                    "id": "ni2",
                    "text": "Matemática II B",
                    "highlights": "universitario"

                }, {
                    "id": "ni3",
                    "text": "Matemáticas",
                    "highlights": "universitario"

                }
            ],

            'MATEMATICA': [

                {
                    "id": "nh2",
                    "text": "Matemática",
                    "highlights": "primaria",

                }, {
                    "id": "nh3",
                    "text": "Matemática",
                    "highlights": "secundario"

                }, {
                    "id": "nh4",
                    "text": "Matemática",
                    "highlights": "tertiary",

                }, {
                    "id": "nh5",
                    "text": "Matemática",
                    "highlights": "universitario"

                }, {
                    "id": "nh6",
                    "text": "Matemática aplicada",
                    "highlights": "secundario"

                }, {
                    "id": "nh7",
                    "text": "Matemática financiera",
                    "highlights": "universitario"

                }, {
                    "id": "nh8",
                    "text": "Matemática I A",
                    "highlights": "universitario"

                }, {
                    "id": "nh9",
                    "text": "Matemática I B",
                    "highlights": "universitario"

                }, {
                    "id": "ni0",
                    "text": "Matemática II",
                    "highlights": "universitario"

                }, {
                    "id": "ni1",
                    "text": "Matemática II A",
                    "highlights": "universitario"

                }, {
                    "id": "ni2",
                    "text": "Matemática II B",
                    "highlights": "universitario"

                }, {
                    "id": "ni3",
                    "text": "Matemáticas",
                    "highlights": "universitario"

                }
            ],


            'MATEMATICA': [

                {
                    "id": "nh2",
                    "text": "Matemática",
                    "highlights": "primaria",

                }, {
                    "id": "nh3",
                    "text": "Matemática",
                    "highlights": "secundario"

                }, {
                    "id": "nh4",
                    "text": "Matemática",
                    "highlights": "tertiary",

                }, {
                    "id": "nh5",
                    "text": "Matemática",
                    "highlights": "universitario"

                }, {
                    "id": "nh6",
                    "text": "Matemática aplicada",
                    "highlights": "secundario"

                }, {
                    "id": "nh7",
                    "text": "Matemática financiera",
                    "highlights": "universitario"

                }, {
                    "id": "nh8",
                    "text": "Matemática I A",
                    "highlights": "universitario"

                }, {
                    "id": "nh9",
                    "text": "Matemática I B",
                    "highlights": "universitario"

                }, {
                    "id": "ni0",
                    "text": "Matemática II",
                    "highlights": "universitario"

                }, {
                    "id": "ni1",
                    "text": "Matemática II A",
                    "highlights": "universitario"

                }, {
                    "id": "ni2",
                    "text": "Matemática II B",
                    "highlights": "universitario"

                }, {
                    "id": "ni3",
                    "text": "Matemáticas",
                    "highlights": "universitario"

                }
            ],


            'N': [

                {
                    "id": "nl0",
                    "text": "Neurociencias I",
                    "highlights": "universitario"

                }, {
                    "id": "nl1",
                    "text": "Neurociencias II",
                    "highlights": "universitario"

                }, {
                    "id": "nl2",
                    "text": "Neurociencias III",
                    "highlights": "universitario"

                }, {
                    "id": "nl3",
                    "text": "Nutrición",
                    "highlights": "universitario"

                }


            ],

            'NE': [

                {
                    "id": "nl0",
                    "text": "Neurociencias I",
                    "highlights": "universitario"

                }, {
                    "id": "nl1",
                    "text": "Neurociencias II",
                    "highlights": "universitario"

                }, {
                    "id": "nl2",
                    "text": "Neurociencias III",
                    "highlights": "universitario"

                }


            ],


            'NEU': [

                {
                    "id": "nl0",
                    "text": "Neurociencias I",
                    "highlights": "universitario"

                }, {
                    "id": "nl1",
                    "text": "Neurociencias II",
                    "highlights": "universitario"

                }, {
                    "id": "nl2",
                    "text": "Neurociencias III",
                    "highlights": "universitario"

                }


            ],

            'NEUR': [

                {
                    "id": "nl0",
                    "text": "Neurociencias I",
                    "highlights": "universitario"

                }, {
                    "id": "nl1",
                    "text": "Neurociencias II",
                    "highlights": "universitario"

                }, {
                    "id": "nl2",
                    "text": "Neurociencias III",
                    "highlights": "universitario"

                }


            ],

            'NEURO': [

                {
                    "id": "nl0",
                    "text": "Neurociencias I",
                    "highlights": "universitario"

                }, {
                    "id": "nl1",
                    "text": "Neurociencias II",
                    "highlights": "universitario"

                }, {
                    "id": "nl2",
                    "text": "Neurociencias III",
                    "highlights": "universitario"

                }


            ],


            'NEUROC': [

                {
                    "id": "nl0",
                    "text": "Neurociencias I",
                    "highlights": "universitario"

                }, {
                    "id": "nl1",
                    "text": "Neurociencias II",
                    "highlights": "universitario"

                }, {
                    "id": "nl2",
                    "text": "Neurociencias III",
                    "highlights": "universitario"

                }


            ],

            'NEUROCI': [

                {
                    "id": "nl0",
                    "text": "Neurociencias I",
                    "highlights": "universitario"

                }, {
                    "id": "nl1",
                    "text": "Neurociencias II",
                    "highlights": "universitario"

                }, {
                    "id": "nl2",
                    "text": "Neurociencias III",
                    "highlights": "universitario"

                }


            ],

            'NEUROCIE': [

                {
                    "id": "nl0",
                    "text": "Neurociencias I",
                    "highlights": "universitario"

                }, {
                    "id": "nl1",
                    "text": "Neurociencias II",
                    "highlights": "universitario"

                }, {
                    "id": "nl2",
                    "text": "Neurociencias III",
                    "highlights": "universitario"

                }


            ],

            'NEUROCIEN': [

                {
                    "id": "nl0",
                    "text": "Neurociencias I",
                    "highlights": "universitario"

                }, {
                    "id": "nl1",
                    "text": "Neurociencias II",
                    "highlights": "universitario"

                }, {
                    "id": "nl2",
                    "text": "Neurociencias III",
                    "highlights": "universitario"

                }


            ],

            'NEUROCIENC': [

                {
                    "id": "nl0",
                    "text": "Neurociencias I",
                    "highlights": "universitario"

                }, {
                    "id": "nl1",
                    "text": "Neurociencias II",
                    "highlights": "universitario"

                }, {
                    "id": "nl2",
                    "text": "Neurociencias III",
                    "highlights": "universitario"

                }


            ],

            'NEUROCIENCI': [

                {
                    "id": "nl0",
                    "text": "Neurociencias I",
                    "highlights": "universitario"

                }, {
                    "id": "nl1",
                    "text": "Neurociencias II",
                    "highlights": "universitario"

                }, {
                    "id": "nl2",
                    "text": "Neurociencias III",
                    "highlights": "universitario"

                }


            ],

            'NEUROCIENCIA': [

                {
                    "id": "nl0",
                    "text": "Neurociencias I",
                    "highlights": "universitario"

                }, {
                    "id": "nl1",
                    "text": "Neurociencias II",
                    "highlights": "universitario"

                }, {
                    "id": "nl2",
                    "text": "Neurociencias III",
                    "highlights": "universitario"

                }


            ],

            'NEUROCIENCIAS': [

                {
                    "id": "nl0",
                    "text": "Neurociencias I",
                    "highlights": "universitario"

                }, {
                    "id": "nl1",
                    "text": "Neurociencias II",
                    "highlights": "universitario"

                }, {
                    "id": "nl2",
                    "text": "Neurociencias III",
                    "highlights": "universitario"

                }


            ],


            'NU': [{
                    "id": "nl3",
                    "text": "Nutrición",
                    "highlights": "universitario"

                }


            ],

            'NUT': [{
                    "id": "nl3",
                    "text": "Nutrición",
                    "highlights": "universitario"

                }


            ],

            'NUTR': [{
                    "id": "nl3",
                    "text": "Nutrición",
                    "highlights": "universitario"

                }


            ],

            'NUTRI': [{
                    "id": "nl3",
                    "text": "Nutrición",
                    "highlights": "universitario"

                }


            ],

            'NUTRIC': [{
                    "id": "nl3",
                    "text": "Nutrición",
                    "highlights": "universitario"

                }


            ],

            'NUTRICI': [{
                    "id": "nl3",
                    "text": "Nutrición",
                    "highlights": "universitario"

                }


            ],


            'NUTRICIO': [{
                    "id": "nl3",
                    "text": "Nutrición",
                    "highlights": "universitario"

                }


            ],

            'NUTRICION': [{
                    "id": "nl3",
                    "text": "Nutrición",
                    "highlights": "universitario"

                }


            ],

            'P': [

                {
                    "id": "nl5",
                    "text": "Patología I",
                    "highlights": "universitario"

                }, {
                    "id": "nl6",
                    "text": "Patrimonio turístico argentino",
                    "highlights": "universitario"

                }, {
                    "id": "nl7",
                    "text": "Percusíon",
                    "highlights": "avanzado"

                }, {
                    "id": "nl8",
                    "text": "Percusíon",
                    "highlights": "basico"

                }, {
                    "id": "nl9",
                    "text": "Percusíon",
                    "highlights": "intermedio"

                }, {
                    "id": "nn0",
                    "text": "Piano",
                    "highlights": "avanzado"

                }, {
                    "id": "nn1",
                    "text": "Piano",
                    "highlights": "basico"

                }, {
                    "id": "nn2",
                    "text": "Piano",
                    "highlights": "intermedio"

                }, {
                    "id": "nn3",
                    "text": "Política y ciudadanía",
                    "highlights": "secundario"

                }, {
                    "id": "nn4",
                    "text": "Portugués",
                    "highlights": "avanzado"

                }, {
                    "id": "nn5",
                    "text": "Portugués",
                    "highlights": "basico"

                }, {
                    "id": "nn6",
                    "text": "Portugués",
                    "highlights": "intermedio"

                }, {
                    "id": "nn7",
                    "text": "Prácticas del lenguaje",
                    "highlights": "primaria",

                }, {
                    "id": "nn9",
                    "text": "Prácticas del lenguaje",
                    "highlights": "secundario"

                }, {
                    "id": "nm0",
                    "text": "Principios de derechos humanos y derecho constitucional",
                    "highlights": "universitario"

                }, {
                    "id": "nm1",
                    "text": "Principios de economía",
                    "highlights": "universitario"

                }, {
                    "id": "nm2",
                    "text": "Principios de farmacología",
                    "highlights": "universitario"

                }, {
                    "id": "nm3",
                    "text": "Principios generales del derecho Latinoamericano",
                    "highlights": "universitario"

                }, {
                    "id": "nm4",
                    "text": "Probabilidad y estadística",
                    "highlights": "universitario"

                }, {
                    "id": "nm5",
                    "text": "Psicoanálisis I",
                    "highlights": "universitario"

                }, {
                    "id": "nm6",
                    "text": "Psicoanálisis II",
                    "highlights": "universitario"

                }, {
                    "id": "nm7",
                    "text": "Psicoanálisis y psicopatología",
                    "highlights": "universitario"

                }, {
                    "id": "nm8",
                    "text": "Psicoestadística",
                    "highlights": "universitario"

                }, {
                    "id": "nm9",
                    "text": "Psicología",
                    "highlights": "secundario"

                }, {
                    "id": "nt0",
                    "text": "Psicología",
                    "highlights": "universitario"

                }

            ],


            'PA': [

                {
                    "id": "nl5",
                    "text": "Patología I",
                    "highlights": "universitario"

                }, {
                    "id": "nl6",
                    "text": "Patrimonio turístico argentino",
                    "highlights": "universitario"

                }
            ],


            'PAT': [

                {
                    "id": "nl5",
                    "text": "Patología I",
                    "highlights": "universitario"

                }, {
                    "id": "nl6",
                    "text": "Patrimonio turístico argentino",
                    "highlights": "universitario"

                }
            ],


            'PATO': [

                {
                    "id": "nl5",
                    "text": "Patología I",
                    "highlights": "universitario"

                }
            ],

            'PATOL': [

                {
                    "id": "nl5",
                    "text": "Patología I",
                    "highlights": "universitario"

                }
            ],

            'PATOLO': [

                {
                    "id": "nl5",
                    "text": "Patología I",
                    "highlights": "universitario"

                }
            ],


            'PATOLOG': [

                {
                    "id": "nl5",
                    "text": "Patología I",
                    "highlights": "universitario"

                }
            ],

            'PATOLOGI': [

                {
                    "id": "nl5",
                    "text": "Patología I",
                    "highlights": "universitario"

                }
            ],

            'PATOLOGIA': [

                {
                    "id": "nl5",
                    "text": "Patología I",
                    "highlights": "universitario"

                }
            ],

            'PATR': [

                {
                    "id": "nl6",
                    "text": "Patrimonio turístico argentino",
                    "highlights": "universitario"

                }
            ],

            'PATRI': [

                {
                    "id": "nl6",
                    "text": "Patrimonio turístico argentino",
                    "highlights": "universitario"

                }
            ],

            'PATRIM': [

                {
                    "id": "nl6",
                    "text": "Patrimonio turístico argentino",
                    "highlights": "universitario"

                }
            ],

            'PATRIMO': [

                {
                    "id": "nl6",
                    "text": "Patrimonio turístico argentino",
                    "highlights": "universitario"

                }
            ],

            'PATRIMON': [

                {
                    "id": "nl6",
                    "text": "Patrimonio turístico argentino",
                    "highlights": "universitario"

                }
            ],

            'PATRIMONI': [

                {
                    "id": "nl6",
                    "text": "Patrimonio turístico argentino",
                    "highlights": "universitario"

                }
            ],

            'PATRIMONIO': [

                {
                    "id": "nl6",
                    "text": "Patrimonio turístico argentino",
                    "highlights": "universitario"

                }
            ],

            'PE': [

                {
                    "id": "nl7",
                    "text": "Percusíon",
                    "highlights": "avanzado"

                }, {
                    "id": "nl8",
                    "text": "Percusíon",
                    "highlights": "basico"

                }, {
                    "id": "nl9",
                    "text": "Percusíon",
                    "highlights": "intermedio"

                }

            ],

            'PER': [

                {
                    "id": "nl7",
                    "text": "Percusíon",
                    "highlights": "avanzado"

                }, {
                    "id": "nl8",
                    "text": "Percusíon",
                    "highlights": "basico"

                }, {
                    "id": "nl9",
                    "text": "Percusíon",
                    "highlights": "intermedio"

                }

            ],

            'PERC': [

                {
                    "id": "nl7",
                    "text": "Percusíon",
                    "highlights": "avanzado"

                }, {
                    "id": "nl8",
                    "text": "Percusíon",
                    "highlights": "basico"

                }, {
                    "id": "nl9",
                    "text": "Percusíon",
                    "highlights": "intermedio"

                }

            ],


            'PERCU': [

                {
                    "id": "nl7",
                    "text": "Percusíon",
                    "highlights": "avanzado"

                }, {
                    "id": "nl8",
                    "text": "Percusíon",
                    "highlights": "basico"

                }, {
                    "id": "nl9",
                    "text": "Percusíon",
                    "highlights": "intermedio"

                }

            ],

            'PERCUS': [

                {
                    "id": "nl7",
                    "text": "Percusíon",
                    "highlights": "avanzado"

                }, {
                    "id": "nl8",
                    "text": "Percusíon",
                    "highlights": "basico"

                }, {
                    "id": "nl9",
                    "text": "Percusíon",
                    "highlights": "intermedio"

                }

            ],

            'PERCUSI': [

                {
                    "id": "nl7",
                    "text": "Percusíon",
                    "highlights": "avanzado"

                }, {
                    "id": "nl8",
                    "text": "Percusíon",
                    "highlights": "basico"

                }, {
                    "id": "nl9",
                    "text": "Percusíon",
                    "highlights": "intermedio"

                }

            ],



            'PERCUSIO': [

                {
                    "id": "nl7",
                    "text": "Percusíon",
                    "highlights": "avanzado"

                }, {
                    "id": "nl8",
                    "text": "Percusíon",
                    "highlights": "basico"

                }, {
                    "id": "nl9",
                    "text": "Percusíon",
                    "highlights": "intermedio"

                }

            ],

            'PERCUSION': [

                {
                    "id": "nl7",
                    "text": "Percusíon",
                    "highlights": "avanzado"

                }, {
                    "id": "nl8",
                    "text": "Percusíon",
                    "highlights": "basico"

                }, {
                    "id": "nl9",
                    "text": "Percusíon",
                    "highlights": "intermedio"

                }

            ],



            'PI': [{
                    "id": "nn0",
                    "text": "Piano",
                    "highlights": "avanzado"

                }, {
                    "id": "nn1",
                    "text": "Piano",
                    "highlights": "basico"

                }, {
                    "id": "nn2",
                    "text": "Piano",
                    "highlights": "intermedio"

                }

            ],

            'PIA': [{
                    "id": "nn0",
                    "text": "Piano",
                    "highlights": "avanzado"

                }, {
                    "id": "nn1",
                    "text": "Piano",
                    "highlights": "basico"

                }, {
                    "id": "nn2",
                    "text": "Piano",
                    "highlights": "intermedio"

                }

            ],


            'PIAN': [{
                    "id": "nn0",
                    "text": "Piano",
                    "highlights": "avanzado"

                }, {
                    "id": "nn1",
                    "text": "Piano",
                    "highlights": "basico"

                }, {
                    "id": "nn2",
                    "text": "Piano",
                    "highlights": "intermedio"

                }

            ],


            'PIANO': [{
                    "id": "nn0",
                    "text": "Piano",
                    "highlights": "avanzado"

                }, {
                    "id": "nn1",
                    "text": "Piano",
                    "highlights": "basico"

                }, {
                    "id": "nn2",
                    "text": "Piano",
                    "highlights": "intermedio"

                }

            ],

            'PO': [{
                "id": "nn3",
                "text": "Política y ciudadanía",
                "highlights": "secundario"

            }, {
                "id": "nn4",
                "text": "Portugués",
                "highlights": "avanzado"

            }, {
                "id": "nn5",
                "text": "Portugués",
                "highlights": "basico"

            }, {
                "id": "nn6",
                "text": "Portugués",
                "highlights": "intermedio"
            }],

            'PO': [{
                "id": "nn3",
                "text": "Política y ciudadanía",
                "highlights": "secundario"

            }, {
                "id": "nn4",
                "text": "Portugués",
                "highlights": "avanzado"

            }, {
                "id": "nn5",
                "text": "Portugués",
                "highlights": "basico"

            }, {
                "id": "nn6",
                "text": "Portugués",
                "highlights": "intermedio"
            }],


            'POL': [{
                "id": "nn3",
                "text": "Política y ciudadanía",
                "highlights": "secundario"

            }],

            'POLI': [{
                "id": "nn3",
                "text": "Política y ciudadanía",
                "highlights": "secundario"

            }],

            'POLIT': [{
                "id": "nn3",
                "text": "Política y ciudadanía",
                "highlights": "secundario"

            }],

            'POLITI': [{
                "id": "nn3",
                "text": "Política y ciudadanía",
                "highlights": "secundario"

            }],

            'POLITIC': [{
                "id": "nn3",
                "text": "Política y ciudadanía",
                "highlights": "secundario"

            }],

            'POLITICA': [{
                "id": "nn3",
                "text": "Política y ciudadanía",
                "highlights": "secundario"

            }],

            'PO': [{
                "id": "nn4",
                "text": "Portugués",
                "highlights": "avanzado"

            }, {
                "id": "nn5",
                "text": "Portugués",
                "highlights": "basico"

            }, {
                "id": "nn6",
                "text": "Portugués",
                "highlights": "intermedio"
            }],

            'POR': [{
                "id": "nn4",
                "text": "Portugués",
                "highlights": "avanzado"

            }, {
                "id": "nn5",
                "text": "Portugués",
                "highlights": "basico"

            }, {
                "id": "nn6",
                "text": "Portugués",
                "highlights": "intermedio"
            }],

            'PORT': [{
                "id": "nn4",
                "text": "Portugués",
                "highlights": "avanzado"

            }, {
                "id": "nn5",
                "text": "Portugués",
                "highlights": "basico"

            }, {
                "id": "nn6",
                "text": "Portugués",
                "highlights": "intermedio"
            }],

            'PORTU': [{
                "id": "nn4",
                "text": "Portugués",
                "highlights": "avanzado"

            }, {
                "id": "nn5",
                "text": "Portugués",
                "highlights": "basico"

            }, {
                "id": "nn6",
                "text": "Portugués",
                "highlights": "intermedio"
            }],

            'PORTUG': [{
                "id": "nn4",
                "text": "Portugués",
                "highlights": "avanzado"

            }, {
                "id": "nn5",
                "text": "Portugués",
                "highlights": "basico"

            }, {
                "id": "nn6",
                "text": "Portugués",
                "highlights": "intermedio"
            }],

            'PORTUGU': [{
                "id": "nn4",
                "text": "Portugués",
                "highlights": "avanzado"

            }, {
                "id": "nn5",
                "text": "Portugués",
                "highlights": "basico"

            }, {
                "id": "nn6",
                "text": "Portugués",
                "highlights": "intermedio"
            }],

            'PORTUGUE': [{
                "id": "nn4",
                "text": "Portugués",
                "highlights": "avanzado"

            }, {
                "id": "nn5",
                "text": "Portugués",
                "highlights": "basico"

            }, {
                "id": "nn6",
                "text": "Portugués",
                "highlights": "intermedio"
            }],

            'PORTUGUES': [{
                "id": "nn4",
                "text": "Portugués",
                "highlights": "avanzado"

            }, {
                "id": "nn5",
                "text": "Portugués",
                "highlights": "basico"

            }, {
                "id": "nn6",
                "text": "Portugués",
                "highlights": "intermedio"
            }],

            'PR': [{
                "id": "nn7",
                "text": "Prácticas del lenguaje",
                "highlights": "primaria",

            }, {
                "id": "nn9",
                "text": "Prácticas del lenguaje",
                "highlights": "secundario"

            }, {
                "id": "nm0",
                "text": "Principios de derechos humanos y derecho constitucional",
                "highlights": "universitario"

            }, {
                "id": "nm1",
                "text": "Principios de economía",
                "highlights": "universitario"

            }, {
                "id": "nm2",
                "text": "Principios de farmacología",
                "highlights": "universitario"

            }, {
                "id": "nm3",
                "text": "Principios generales del derecho Latinoamericano",
                "highlights": "universitario"

            }, {
                "id": "nm4",
                "text": "Probabilidad y estadística",
                "highlights": "universitario"

            }],


            'PRA': [{
                "id": "nn7",
                "text": "Prácticas del lenguaje",
                "highlights": "primaria",

            }, {
                "id": "nn9",
                "text": "Prácticas del lenguaje",
                "highlights": "secundario"

            }],

            'PRAC': [{
                "id": "nn7",
                "text": "Prácticas del lenguaje",
                "highlights": "primaria",

            }, {
                "id": "nn9",
                "text": "Prácticas del lenguaje",
                "highlights": "secundario"

            }],

            'PRACT': [{
                "id": "nn7",
                "text": "Prácticas del lenguaje",
                "highlights": "primaria",

            }, {
                "id": "nn9",
                "text": "Prácticas del lenguaje",
                "highlights": "secundario"

            }],

            'PRACTI': [{
                "id": "nn7",
                "text": "Prácticas del lenguaje",
                "highlights": "primaria",

            }, {
                "id": "nn9",
                "text": "Prácticas del lenguaje",
                "highlights": "secundario"

            }],

            'PRACTIC': [{
                "id": "nn7",
                "text": "Prácticas del lenguaje",
                "highlights": "primaria",

            }, {
                "id": "nn9",
                "text": "Prácticas del lenguaje",
                "highlights": "secundario"

            }],

            'PRACTICA': [{
                "id": "nn7",
                "text": "Prácticas del lenguaje",
                "highlights": "primaria",

            }, {
                "id": "nn9",
                "text": "Prácticas del lenguaje",
                "highlights": "secundario"

            }],

            'PRACTICAS': [{
                "id": "nn7",
                "text": "Prácticas del lenguaje",
                "highlights": "primaria",

            }, {
                "id": "nn9",
                "text": "Prácticas del lenguaje",
                "highlights": "secundario"

            }],


            'PRI': [{
                "id": "nm0",
                "text": "Principios de derechos humanos y derecho constitucional",
                "highlights": "universitario"

            }, {
                "id": "nm1",
                "text": "Principios de economía",
                "highlights": "universitario"

            }, {
                "id": "nm2",
                "text": "Principios de farmacología",
                "highlights": "universitario"

            }, {
                "id": "nm3",
                "text": "Principios generales del derecho Latinoamericano",
                "highlights": "universitario"

            }],

            'PRIN': [{
                "id": "nm0",
                "text": "Principios de derechos humanos y derecho constitucional",
                "highlights": "universitario"

            }, {
                "id": "nm1",
                "text": "Principios de economía",
                "highlights": "universitario"

            }, {
                "id": "nm2",
                "text": "Principios de farmacología",
                "highlights": "universitario"

            }, {
                "id": "nm3",
                "text": "Principios generales del derecho Latinoamericano",
                "highlights": "universitario"

            }],

            'PRINC': [{
                "id": "nm0",
                "text": "Principios de derechos humanos y derecho constitucional",
                "highlights": "universitario"

            }, {
                "id": "nm1",
                "text": "Principios de economía",
                "highlights": "universitario"

            }, {
                "id": "nm2",
                "text": "Principios de farmacología",
                "highlights": "universitario"

            }, {
                "id": "nm3",
                "text": "Principios generales del derecho Latinoamericano",
                "highlights": "universitario"

            }],

            'PRINCI': [{
                "id": "nm0",
                "text": "Principios de derechos humanos y derecho constitucional",
                "highlights": "universitario"

            }, {
                "id": "nm1",
                "text": "Principios de economía",
                "highlights": "universitario"

            }, {
                "id": "nm2",
                "text": "Principios de farmacología",
                "highlights": "universitario"

            }, {
                "id": "nm3",
                "text": "Principios generales del derecho Latinoamericano",
                "highlights": "universitario"

            }],

            'PRINCIP': [{
                "id": "nm0",
                "text": "Principios de derechos humanos y derecho constitucional",
                "highlights": "universitario"

            }, {
                "id": "nm1",
                "text": "Principios de economía",
                "highlights": "universitario"

            }, {
                "id": "nm2",
                "text": "Principios de farmacología",
                "highlights": "universitario"

            }, {
                "id": "nm3",
                "text": "Principios generales del derecho Latinoamericano",
                "highlights": "universitario"

            }],

            'PRINCIPI': [{
                "id": "nm0",
                "text": "Principios de derechos humanos y derecho constitucional",
                "highlights": "universitario"

            }, {
                "id": "nm1",
                "text": "Principios de economía",
                "highlights": "universitario"

            }, {
                "id": "nm2",
                "text": "Principios de farmacología",
                "highlights": "universitario"

            }, {
                "id": "nm3",
                "text": "Principios generales del derecho Latinoamericano",
                "highlights": "universitario"

            }],

            'PRINCIPIO': [{
                "id": "nm0",
                "text": "Principios de derechos humanos y derecho constitucional",
                "highlights": "universitario"

            }, {
                "id": "nm1",
                "text": "Principios de economía",
                "highlights": "universitario"

            }, {
                "id": "nm2",
                "text": "Principios de farmacología",
                "highlights": "universitario"

            }, {
                "id": "nm3",
                "text": "Principios generales del derecho Latinoamericano",
                "highlights": "universitario"

            }],

            'PRINCIPIOS': [{
                "id": "nm0",
                "text": "Principios de derechos humanos y derecho constitucional",
                "highlights": "universitario"

            }, {
                "id": "nm1",
                "text": "Principios de economía",
                "highlights": "universitario"

            }, {
                "id": "nm2",
                "text": "Principios de farmacología",
                "highlights": "universitario"

            }, {
                "id": "nm3",
                "text": "Principios generales del derecho Latinoamericano",
                "highlights": "universitario"

            }],


            'PRO': [{
                "id": "nm4",
                "text": "Probabilidad y estadística",
                "highlights": "universitario"

            }],

            'PRO': [{
                "id": "nm4",
                "text": "Probabilidad y estadística",
                "highlights": "universitario"

            }],

            'PROB': [{
                "id": "nm4",
                "text": "Probabilidad y estadística",
                "highlights": "universitario"

            }],

            'PROBA': [{
                "id": "nm4",
                "text": "Probabilidad y estadística",
                "highlights": "universitario"

            }],

            'PROBAB': [{
                "id": "nm4",
                "text": "Probabilidad y estadística",
                "highlights": "universitario"

            }],

            'PROBABI': [{
                "id": "nm4",
                "text": "Probabilidad y estadística",
                "highlights": "universitario"

            }],

            'PROBABIL': [{
                "id": "nm4",
                "text": "Probabilidad y estadística",
                "highlights": "universitario"

            }],

            'PROBABILI': [{
                "id": "nm4",
                "text": "Probabilidad y estadística",
                "highlights": "universitario"

            }],

            'PROBABILID': [{
                "id": "nm4",
                "text": "Probabilidad y estadística",
                "highlights": "universitario"

            }],

            'PROBABILIDA': [{
                "id": "nm4",
                "text": "Probabilidad y estadística",
                "highlights": "universitario"

            }],

            'PROBABILIDAD': [{
                "id": "nm4",
                "text": "Probabilidad y estadística",
                "highlights": "universitario"

            }],



            'PRA': [{
                "id": "nn7",
                "text": "Prácticas del lenguaje",
                "highlights": "primaria",

            }, {
                "id": "nn9",
                "text": "Prácticas del lenguaje",
                "highlights": "secundario"
            }],

            'PRAC': [{
                "id": "nn7",
                "text": "Prácticas del lenguaje",
                "highlights": "primaria",

            }, {
                "id": "nn9",
                "text": "Prácticas del lenguaje",
                "highlights": "secundario"
            }],

            'PRACT': [{
                "id": "nn7",
                "text": "Prácticas del lenguaje",
                "highlights": "primaria",

            }, {
                "id": "nn9",
                "text": "Prácticas del lenguaje",
                "highlights": "secundario"
            }],

            'PRACTI': [{
                "id": "nn7",
                "text": "Prácticas del lenguaje",
                "highlights": "primaria",

            }, {
                "id": "nn9",
                "text": "Prácticas del lenguaje",
                "highlights": "secundario"
            }],

            'PRACTIC': [{
                "id": "nn7",
                "text": "Prácticas del lenguaje",
                "highlights": "primaria",

            }, {
                "id": "nn9",
                "text": "Prácticas del lenguaje",
                "highlights": "secundario"
            }],

            'PRACTICA': [{
                "id": "nn7",
                "text": "Prácticas del lenguaje",
                "highlights": "primaria",

            }, {
                "id": "nn9",
                "text": "Prácticas del lenguaje",
                "highlights": "secundario"
            }],

            'PRACTICAS': [{
                "id": "nn7",
                "text": "Prácticas del lenguaje",
                "highlights": "primaria",

            }, {
                "id": "nn9",
                "text": "Prácticas del lenguaje",
                "highlights": "secundario"
            }],

            'PRI': [{
                "id": "nm0",
                "text": "Principios de derechos humanos y derecho constitucional",
                "highlights": "universitario"

            }, {
                "id": "nm1",
                "text": "Principios de economía",
                "highlights": "universitario"

            }, {
                "id": "nm2",
                "text": "Principios de farmacología",
                "highlights": "universitario"

            }, {
                "id": "nm3",
                "text": "Principios generales del derecho Latinoamericano",
                "highlights": "universitario"

            }],

            'PRIN': [{
                "id": "nm0",
                "text": "Principios de derechos humanos y derecho constitucional",
                "highlights": "universitario"

            }, {
                "id": "nm1",
                "text": "Principios de economía",
                "highlights": "universitario"

            }, {
                "id": "nm2",
                "text": "Principios de farmacología",
                "highlights": "universitario"

            }, {
                "id": "nm3",
                "text": "Principios generales del derecho Latinoamericano",
                "highlights": "universitario"

            }],

            'PRINC': [{
                "id": "nm0",
                "text": "Principios de derechos humanos y derecho constitucional",
                "highlights": "universitario"

            }, {
                "id": "nm1",
                "text": "Principios de economía",
                "highlights": "universitario"

            }, {
                "id": "nm2",
                "text": "Principios de farmacología",
                "highlights": "universitario"

            }, {
                "id": "nm3",
                "text": "Principios generales del derecho Latinoamericano",
                "highlights": "universitario"

            }],

            'PRINCI': [{
                "id": "nm0",
                "text": "Principios de derechos humanos y derecho constitucional",
                "highlights": "universitario"

            }, {
                "id": "nm1",
                "text": "Principios de economía",
                "highlights": "universitario"

            }, {
                "id": "nm2",
                "text": "Principios de farmacología",
                "highlights": "universitario"

            }, {
                "id": "nm3",
                "text": "Principios generales del derecho Latinoamericano",
                "highlights": "universitario"

            }],

            'PRINCIP': [{
                "id": "nm0",
                "text": "Principios de derechos humanos y derecho constitucional",
                "highlights": "universitario"

            }, {
                "id": "nm1",
                "text": "Principios de economía",
                "highlights": "universitario"

            }, {
                "id": "nm2",
                "text": "Principios de farmacología",
                "highlights": "universitario"

            }, {
                "id": "nm3",
                "text": "Principios generales del derecho Latinoamericano",
                "highlights": "universitario"

            }],

            'PRINCIPI': [{
                "id": "nm0",
                "text": "Principios de derechos humanos y derecho constitucional",
                "highlights": "universitario"

            }, {
                "id": "nm1",
                "text": "Principios de economía",
                "highlights": "universitario"

            }, {
                "id": "nm2",
                "text": "Principios de farmacología",
                "highlights": "universitario"

            }, {
                "id": "nm3",
                "text": "Principios generales del derecho Latinoamericano",
                "highlights": "universitario"

            }],

            'PRINCIPIO': [{
                "id": "nm0",
                "text": "Principios de derechos humanos y derecho constitucional",
                "highlights": "universitario"

            }, {
                "id": "nm1",
                "text": "Principios de economía",
                "highlights": "universitario"

            }, {
                "id": "nm2",
                "text": "Principios de farmacología",
                "highlights": "universitario"

            }, {
                "id": "nm3",
                "text": "Principios generales del derecho Latinoamericano",
                "highlights": "universitario"

            }],

            'PRINCIPIOS': [{
                "id": "nm0",
                "text": "Principios de derechos humanos y derecho constitucional",
                "highlights": "universitario"

            }, {
                "id": "nm1",
                "text": "Principios de economía",
                "highlights": "universitario"

            }, {
                "id": "nm2",
                "text": "Principios de farmacología",
                "highlights": "universitario"

            }, {
                "id": "nm3",
                "text": "Principios generales del derecho Latinoamericano",
                "highlights": "universitario"

            }],

            'PRO': [{
                "id": "nm4",
                "text": "Probabilidad y estadística",
                "highlights": "universitario"

            }],

            'PROB': [{
                "id": "nm4",
                "text": "Probabilidad y estadística",
                "highlights": "universitario"

            }],

            'PROBA': [{
                "id": "nm4",
                "text": "Probabilidad y estadística",
                "highlights": "universitario"

            }],

            'PROBAB': [{
                "id": "nm4",
                "text": "Probabilidad y estadística",
                "highlights": "universitario"

            }],

            'PROBABI': [{
                "id": "nm4",
                "text": "Probabilidad y estadística",
                "highlights": "universitario"

            }],


            'PROBABIL': [{
                "id": "nm4",
                "text": "Probabilidad y estadística",
                "highlights": "universitario"

            }],

            'PROBABILI': [{
                "id": "nm4",
                "text": "Probabilidad y estadística",
                "highlights": "universitario"

            }],


            'PROBABILID': [{
                "id": "nm4",
                "text": "Probabilidad y estadística",
                "highlights": "universitario"

            }],

            'PROBABILIDA': [{
                "id": "nm4",
                "text": "Probabilidad y estadística",
                "highlights": "universitario"

            }],

            'PROBABILIDAD': [{
                "id": "nm4",
                "text": "Probabilidad y estadística",
                "highlights": "universitario"

            }],




            'PRO': [{
                "id": "nm4",
                "text": "Probabilidad y estadística",
                "highlights": "universitario"

            }, {
                "id": "nm5",
                "text": "Psicoanálisis I",
                "highlights": "universitario"

            }, {
                "id": "nm6",
                "text": "Psicoanálisis II",
                "highlights": "universitario"

            }, {
                "id": "nm7",
                "text": "Psicoanálisis y psicopatología",
                "highlights": "universitario"

            }, {
                "id": "nm8",
                "text": "Psicoestadística",
                "highlights": "universitario"

            }, {
                "id": "nm9",
                "text": "Psicología",
                "highlights": "secundario"

            }, {
                "id": "nt0",
                "text": "Psicología",
                "highlights": "universitario"

            }],

            'PS': [{
                "id": "nm5",
                "text": "Psicoanálisis I",
                "highlights": "universitario"

            }, {
                "id": "nm6",
                "text": "Psicoanálisis II",
                "highlights": "universitario"

            }, {
                "id": "nm7",
                "text": "Psicoanálisis y psicopatología",
                "highlights": "universitario"

            }, {
                "id": "nm8",
                "text": "Psicoestadística",
                "highlights": "universitario"

            }, {
                "id": "nm9",
                "text": "Psicología",
                "highlights": "secundario"

            }, {
                "id": "nt0",
                "text": "Psicología",
                "highlights": "universitario"

            }],

            'PSI': [{
                "id": "nm5",
                "text": "Psicoanálisis I",
                "highlights": "universitario"

            }, {
                "id": "nm6",
                "text": "Psicoanálisis II",
                "highlights": "universitario"

            }, {
                "id": "nm7",
                "text": "Psicoanálisis y psicopatología",
                "highlights": "universitario"

            }, {
                "id": "nm8",
                "text": "Psicoestadística",
                "highlights": "universitario"

            }, {
                "id": "nm9",
                "text": "Psicología",
                "highlights": "secundario"

            }, {
                "id": "nt0",
                "text": "Psicología",
                "highlights": "universitario"

            }],

            'PSIC': [{
                "id": "nm5",
                "text": "Psicoanálisis I",
                "highlights": "universitario"

            }, {
                "id": "nm6",
                "text": "Psicoanálisis II",
                "highlights": "universitario"

            }, {
                "id": "nm7",
                "text": "Psicoanálisis y psicopatología",
                "highlights": "universitario"

            }, {
                "id": "nm8",
                "text": "Psicoestadística",
                "highlights": "universitario"

            }, {
                "id": "nm9",
                "text": "Psicología",
                "highlights": "secundario"

            }, {
                "id": "nt0",
                "text": "Psicología",
                "highlights": "universitario"

            }],

            'PSICO': [{
                "id": "nm5",
                "text": "Psicoanálisis I",
                "highlights": "universitario"

            }, {
                "id": "nm6",
                "text": "Psicoanálisis II",
                "highlights": "universitario"

            }, {
                "id": "nm7",
                "text": "Psicoanálisis y psicopatología",
                "highlights": "universitario"

            }, {
                "id": "nm8",
                "text": "Psicoestadística",
                "highlights": "universitario"

            }, {
                "id": "nm9",
                "text": "Psicología",
                "highlights": "secundario"

            }, {
                "id": "nt0",
                "text": "Psicología",
                "highlights": "universitario"

            }],

            'PSICOA': [{
                "id": "nm5",
                "text": "Psicoanálisis I",
                "highlights": "universitario"

            }, {
                "id": "nm6",
                "text": "Psicoanálisis II",
                "highlights": "universitario"

            }, {
                "id": "nm7",
                "text": "Psicoanálisis y psicopatología",
                "highlights": "universitario"

            }],

            'PSICOAN': [{
                "id": "nm5",
                "text": "Psicoanálisis I",
                "highlights": "universitario"

            }, {
                "id": "nm6",
                "text": "Psicoanálisis II",
                "highlights": "universitario"

            }, {
                "id": "nm7",
                "text": "Psicoanálisis y psicopatología",
                "highlights": "universitario"

            }],

            'PSICOANA': [{
                "id": "nm5",
                "text": "Psicoanálisis I",
                "highlights": "universitario"

            }, {
                "id": "nm6",
                "text": "Psicoanálisis II",
                "highlights": "universitario"

            }, {
                "id": "nm7",
                "text": "Psicoanálisis y psicopatología",
                "highlights": "universitario"

            }],

            'PSICOANAL': [{
                "id": "nm5",
                "text": "Psicoanálisis I",
                "highlights": "universitario"

            }, {
                "id": "nm6",
                "text": "Psicoanálisis II",
                "highlights": "universitario"

            }, {
                "id": "nm7",
                "text": "Psicoanálisis y psicopatología",
                "highlights": "universitario"

            }],

            'PSICOANALI': [{
                "id": "nm5",
                "text": "Psicoanálisis I",
                "highlights": "universitario"

            }, {
                "id": "nm6",
                "text": "Psicoanálisis II",
                "highlights": "universitario"

            }, {
                "id": "nm7",
                "text": "Psicoanálisis y psicopatología",
                "highlights": "universitario"

            }],

            'PSICOANALIS': [{
                "id": "nm5",
                "text": "Psicoanálisis I",
                "highlights": "universitario"

            }, {
                "id": "nm6",
                "text": "Psicoanálisis II",
                "highlights": "universitario"

            }, {
                "id": "nm7",
                "text": "Psicoanálisis y psicopatología",
                "highlights": "universitario"

            }],

            'PSICOANALISI': [{
                "id": "nm5",
                "text": "Psicoanálisis I",
                "highlights": "universitario"

            }, {
                "id": "nm6",
                "text": "Psicoanálisis II",
                "highlights": "universitario"

            }, {
                "id": "nm7",
                "text": "Psicoanálisis y psicopatología",
                "highlights": "universitario"

            }],

            'PSICOANALISIS': [{
                "id": "nm5",
                "text": "Psicoanálisis I",
                "highlights": "universitario"

            }, {
                "id": "nm6",
                "text": "Psicoanálisis II",
                "highlights": "universitario"

            }, {
                "id": "nm7",
                "text": "Psicoanálisis y psicopatología",
                "highlights": "universitario"

            }],

            'PSICOE': [{
                "id": "nm8",
                "text": "Psicoestadística",
                "highlights": "universitario"

            }],

            'PSICOES': [{
                "id": "nm8",
                "text": "Psicoestadística",
                "highlights": "universitario"

            }],

            'PSICOEST': [{
                "id": "nm8",
                "text": "Psicoestadística",
                "highlights": "universitario"

            }],

            'PSICOESTA': [{
                "id": "nm8",
                "text": "Psicoestadística",
                "highlights": "universitario"

            }],

            'PSICOESTAD': [{
                "id": "nm8",
                "text": "Psicoestadística",
                "highlights": "universitario"

            }],

            'PSICOESTADI': [{
                "id": "nm8",
                "text": "Psicoestadística",
                "highlights": "universitario"

            }],

            'PSICOESTADIS': [{
                "id": "nm8",
                "text": "Psicoestadística",
                "highlights": "universitario"

            }],

            'PSICOESTADIST': [{
                "id": "nm8",
                "text": "Psicoestadística",
                "highlights": "universitario"

            }],

            'PSICOESTADISTI': [{
                "id": "nm8",
                "text": "Psicoestadística",
                "highlights": "universitario"

            }],

            'PSICOESTADISTIC': [{
                "id": "nm8",
                "text": "Psicoestadística",
                "highlights": "universitario"

            }],

            'PSICOESTADISTICA': [{
                "id": "nm8",
                "text": "Psicoestadística",
                "highlights": "universitario"

            }],





            'Q': [


                {
                    "id": "nt1",
                    "text": "Química",
                    "highlights": "secundario"

                }, {
                    "id": "nt2",
                    "text": "Química",
                    "highlights": "tertiary",

                }, {
                    "id": "nt3",
                    "text": "Química",
                    "highlights": "universitario"

                }, {
                    "id": "nt4",
                    "text": "Química, alimentación y salud",
                    "highlights": "secundario"

                }, {
                    "id": "nt5",
                    "text": "Química analítica",
                    "highlights": "secundario"

                }, {
                    "id": "nt6",
                    "text": "Química analítica general",
                    "highlights": "universitario"

                }, {
                    "id": "nt7",
                    "text": "Química analítica instrumental",
                    "highlights": "universitario"

                }, {
                    "id": "nt8",
                    "text": "Química aplicada",
                    "highlights": "secundario"

                }, {
                    "id": "nt9",
                    "text": "Química aplicada",
                    "highlights": "universitario"

                }, {
                    "id": "nu0",
                    "text": "Química biológica",
                    "highlights": "universitario"

                }, {
                    "id": "nu1",
                    "text": "Química del carbono",
                    "highlights": "secundario"

                }, {
                    "id": "nu2",
                    "text": "Química general e inorgánica",
                    "highlights": "secundario"

                }, {
                    "id": "nu3",
                    "text": "Química general e inorgánica",
                    "highlights": "universitario"

                }, {
                    "id": "nu4",
                    "text": "Química general II",
                    "highlights": "universitario"

                }, {
                    "id": "nu5",
                    "text": "Química general para ingeniería",
                    "highlights": "universitario"

                }, {
                    "id": "nu6",
                    "text": "Química I",
                    "highlights": "universitario"

                }, {
                    "id": "nu7",
                    "text": "Química industrial",
                    "highlights": "secundario"

                }, {
                    "id": "nu8",
                    "text": "Química industrial I",
                    "highlights": "secundario"

                }, {
                    "id": "nu9",
                    "text": "Química industrial II",
                    "highlights": "secundario"

                }, {
                    "id": "nx0",
                    "text": "Química inorgánica",
                    "highlights": "secundario"

                }, {
                    "id": "nx1",
                    "text": "Química inorgánica",
                    "highlights": "universitario"

                }, {
                    "id": "nx2",
                    "text": "Química orgánica",
                    "highlights": "secundario"

                }, {
                    "id": "nx3",
                    "text": "Química orgánica I",
                    "highlights": "universitario"

                }, {
                    "id": "nx4",
                    "text": "Química orgánica II",
                    "highlights": "universitario"

                }, {
                    "id": "nx5",
                    "text": "Química orgánica y biológica",
                    "highlights": "secundario"

                }, {
                    "id": "nx6",
                    "text": "Química orgánica y bio-orgánica",
                    "highlights": "secundario"

                }


            ],

            'QU': [


                {
                    "id": "nt1",
                    "text": "Química",
                    "highlights": "secundario"

                }, {
                    "id": "nt2",
                    "text": "Química",
                    "highlights": "tertiary",

                }, {
                    "id": "nt3",
                    "text": "Química",
                    "highlights": "universitario"

                }, {
                    "id": "nt4",
                    "text": "Química, alimentación y salud",
                    "highlights": "secundario"

                }, {
                    "id": "nt5",
                    "text": "Química analítica",
                    "highlights": "secundario"

                }, {
                    "id": "nt6",
                    "text": "Química analítica general",
                    "highlights": "universitario"

                }, {
                    "id": "nt7",
                    "text": "Química analítica instrumental",
                    "highlights": "universitario"

                }, {
                    "id": "nt8",
                    "text": "Química aplicada",
                    "highlights": "secundario"

                }, {
                    "id": "nt9",
                    "text": "Química aplicada",
                    "highlights": "universitario"

                }, {
                    "id": "nu0",
                    "text": "Química biológica",
                    "highlights": "universitario"

                }, {
                    "id": "nu1",
                    "text": "Química del carbono",
                    "highlights": "secundario"

                }, {
                    "id": "nu2",
                    "text": "Química general e inorgánica",
                    "highlights": "secundario"

                }, {
                    "id": "nu3",
                    "text": "Química general e inorgánica",
                    "highlights": "universitario"

                }, {
                    "id": "nu4",
                    "text": "Química general II",
                    "highlights": "universitario"

                }, {
                    "id": "nu5",
                    "text": "Química general para ingeniería",
                    "highlights": "universitario"

                }, {
                    "id": "nu6",
                    "text": "Química I",
                    "highlights": "universitario"

                }, {
                    "id": "nu7",
                    "text": "Química industrial",
                    "highlights": "secundario"

                }, {
                    "id": "nu8",
                    "text": "Química industrial I",
                    "highlights": "secundario"

                }, {
                    "id": "nu9",
                    "text": "Química industrial II",
                    "highlights": "secundario"

                }, {
                    "id": "nx0",
                    "text": "Química inorgánica",
                    "highlights": "secundario"

                }, {
                    "id": "nx1",
                    "text": "Química inorgánica",
                    "highlights": "universitario"

                }, {
                    "id": "nx2",
                    "text": "Química orgánica",
                    "highlights": "secundario"

                }, {
                    "id": "nx3",
                    "text": "Química orgánica I",
                    "highlights": "universitario"

                }, {
                    "id": "nx4",
                    "text": "Química orgánica II",
                    "highlights": "universitario"

                }, {
                    "id": "nx5",
                    "text": "Química orgánica y biológica",
                    "highlights": "secundario"

                }, {
                    "id": "nx6",
                    "text": "Química orgánica y bio-orgánica",
                    "highlights": "secundario"

                }

            ],

            'QUI': [


                {
                    "id": "nt1",
                    "text": "Química",
                    "highlights": "secundario"

                }, {
                    "id": "nt2",
                    "text": "Química",
                    "highlights": "tertiary",

                }, {
                    "id": "nt3",
                    "text": "Química",
                    "highlights": "universitario"

                }, {
                    "id": "nt4",
                    "text": "Química, alimentación y salud",
                    "highlights": "secundario"

                }, {
                    "id": "nt5",
                    "text": "Química analítica",
                    "highlights": "secundario"

                }, {
                    "id": "nt6",
                    "text": "Química analítica general",
                    "highlights": "universitario"

                }, {
                    "id": "nt7",
                    "text": "Química analítica instrumental",
                    "highlights": "universitario"

                }, {
                    "id": "nt8",
                    "text": "Química aplicada",
                    "highlights": "secundario"

                }, {
                    "id": "nt9",
                    "text": "Química aplicada",
                    "highlights": "universitario"

                }, {
                    "id": "nu0",
                    "text": "Química biológica",
                    "highlights": "universitario"

                }, {
                    "id": "nu1",
                    "text": "Química del carbono",
                    "highlights": "secundario"

                }, {
                    "id": "nu2",
                    "text": "Química general e inorgánica",
                    "highlights": "secundario"

                }, {
                    "id": "nu3",
                    "text": "Química general e inorgánica",
                    "highlights": "universitario"

                }, {
                    "id": "nu4",
                    "text": "Química general II",
                    "highlights": "universitario"

                }, {
                    "id": "nu5",
                    "text": "Química general para ingeniería",
                    "highlights": "universitario"

                }, {
                    "id": "nu6",
                    "text": "Química I",
                    "highlights": "universitario"

                }, {
                    "id": "nu7",
                    "text": "Química industrial",
                    "highlights": "secundario"

                }, {
                    "id": "nu8",
                    "text": "Química industrial I",
                    "highlights": "secundario"

                }, {
                    "id": "nu9",
                    "text": "Química industrial II",
                    "highlights": "secundario"

                }, {
                    "id": "nx0",
                    "text": "Química inorgánica",
                    "highlights": "secundario"

                }, {
                    "id": "nx1",
                    "text": "Química inorgánica",
                    "highlights": "universitario"

                }, {
                    "id": "nx2",
                    "text": "Química orgánica",
                    "highlights": "secundario"

                }, {
                    "id": "nx3",
                    "text": "Química orgánica I",
                    "highlights": "universitario"

                }, {
                    "id": "nx4",
                    "text": "Química orgánica II",
                    "highlights": "universitario"

                }, {
                    "id": "nx5",
                    "text": "Química orgánica y biológica",
                    "highlights": "secundario"

                }, {
                    "id": "nx6",
                    "text": "Química orgánica y bio-orgánica",
                    "highlights": "secundario"

                }

            ],

            'QUIM': [


                {
                    "id": "nt1",
                    "text": "Química",
                    "highlights": "secundario"

                }, {
                    "id": "nt2",
                    "text": "Química",
                    "highlights": "tertiary",

                }, {
                    "id": "nt3",
                    "text": "Química",
                    "highlights": "universitario"

                }, {
                    "id": "nt4",
                    "text": "Química, alimentación y salud",
                    "highlights": "secundario"

                }, {
                    "id": "nt5",
                    "text": "Química analítica",
                    "highlights": "secundario"

                }, {
                    "id": "nt6",
                    "text": "Química analítica general",
                    "highlights": "universitario"

                }, {
                    "id": "nt7",
                    "text": "Química analítica instrumental",
                    "highlights": "universitario"

                }, {
                    "id": "nt8",
                    "text": "Química aplicada",
                    "highlights": "secundario"

                }, {
                    "id": "nt9",
                    "text": "Química aplicada",
                    "highlights": "universitario"

                }, {
                    "id": "nu0",
                    "text": "Química biológica",
                    "highlights": "universitario"

                }, {
                    "id": "nu1",
                    "text": "Química del carbono",
                    "highlights": "secundario"

                }, {
                    "id": "nu2",
                    "text": "Química general e inorgánica",
                    "highlights": "secundario"

                }, {
                    "id": "nu3",
                    "text": "Química general e inorgánica",
                    "highlights": "universitario"

                }, {
                    "id": "nu4",
                    "text": "Química general II",
                    "highlights": "universitario"

                }, {
                    "id": "nu5",
                    "text": "Química general para ingeniería",
                    "highlights": "universitario"

                }, {
                    "id": "nu6",
                    "text": "Química I",
                    "highlights": "universitario"

                }, {
                    "id": "nu7",
                    "text": "Química industrial",
                    "highlights": "secundario"

                }, {
                    "id": "nu8",
                    "text": "Química industrial I",
                    "highlights": "secundario"

                }, {
                    "id": "nu9",
                    "text": "Química industrial II",
                    "highlights": "secundario"

                }, {
                    "id": "nx0",
                    "text": "Química inorgánica",
                    "highlights": "secundario"

                }, {
                    "id": "nx1",
                    "text": "Química inorgánica",
                    "highlights": "universitario"

                }, {
                    "id": "nx2",
                    "text": "Química orgánica",
                    "highlights": "secundario"

                }, {
                    "id": "nx3",
                    "text": "Química orgánica I",
                    "highlights": "universitario"

                }, {
                    "id": "nx4",
                    "text": "Química orgánica II",
                    "highlights": "universitario"

                }, {
                    "id": "nx5",
                    "text": "Química orgánica y biológica",
                    "highlights": "secundario"

                }, {
                    "id": "nx6",
                    "text": "Química orgánica y bio-orgánica",
                    "highlights": "secundario"

                }

            ],


            'QUIMI': [


                {
                    "id": "nt1",
                    "text": "Química",
                    "highlights": "secundario"

                }, {
                    "id": "nt2",
                    "text": "Química",
                    "highlights": "tertiary",

                }, {
                    "id": "nt3",
                    "text": "Química",
                    "highlights": "universitario"

                }, {
                    "id": "nt4",
                    "text": "Química, alimentación y salud",
                    "highlights": "secundario"

                }, {
                    "id": "nt5",
                    "text": "Química analítica",
                    "highlights": "secundario"

                }, {
                    "id": "nt6",
                    "text": "Química analítica general",
                    "highlights": "universitario"

                }, {
                    "id": "nt7",
                    "text": "Química analítica instrumental",
                    "highlights": "universitario"

                }, {
                    "id": "nt8",
                    "text": "Química aplicada",
                    "highlights": "secundario"

                }, {
                    "id": "nt9",
                    "text": "Química aplicada",
                    "highlights": "universitario"

                }, {
                    "id": "nu0",
                    "text": "Química biológica",
                    "highlights": "universitario"

                }, {
                    "id": "nu1",
                    "text": "Química del carbono",
                    "highlights": "secundario"

                }, {
                    "id": "nu2",
                    "text": "Química general e inorgánica",
                    "highlights": "secundario"

                }, {
                    "id": "nu3",
                    "text": "Química general e inorgánica",
                    "highlights": "universitario"

                }, {
                    "id": "nu4",
                    "text": "Química general II",
                    "highlights": "universitario"

                }, {
                    "id": "nu5",
                    "text": "Química general para ingeniería",
                    "highlights": "universitario"

                }, {
                    "id": "nu6",
                    "text": "Química I",
                    "highlights": "universitario"

                }, {
                    "id": "nu7",
                    "text": "Química industrial",
                    "highlights": "secundario"

                }, {
                    "id": "nu8",
                    "text": "Química industrial I",
                    "highlights": "secundario"

                }, {
                    "id": "nu9",
                    "text": "Química industrial II",
                    "highlights": "secundario"

                }, {
                    "id": "nx0",
                    "text": "Química inorgánica",
                    "highlights": "secundario"

                }, {
                    "id": "nx1",
                    "text": "Química inorgánica",
                    "highlights": "universitario"

                }, {
                    "id": "nx2",
                    "text": "Química orgánica",
                    "highlights": "secundario"

                }, {
                    "id": "nx3",
                    "text": "Química orgánica I",
                    "highlights": "universitario"

                }, {
                    "id": "nx4",
                    "text": "Química orgánica II",
                    "highlights": "universitario"

                }, {
                    "id": "nx5",
                    "text": "Química orgánica y biológica",
                    "highlights": "secundario"

                }, {
                    "id": "nx6",
                    "text": "Química orgánica y bio-orgánica",
                    "highlights": "secundario"

                }

            ],

            'QUIMIC': [


                {
                    "id": "nt1",
                    "text": "Química",
                    "highlights": "secundario"

                }, {
                    "id": "nt2",
                    "text": "Química",
                    "highlights": "tertiary",

                }, {
                    "id": "nt3",
                    "text": "Química",
                    "highlights": "universitario"

                }, {
                    "id": "nt4",
                    "text": "Química, alimentación y salud",
                    "highlights": "secundario"

                }, {
                    "id": "nt5",
                    "text": "Química analítica",
                    "highlights": "secundario"

                }, {
                    "id": "nt6",
                    "text": "Química analítica general",
                    "highlights": "universitario"

                }, {
                    "id": "nt7",
                    "text": "Química analítica instrumental",
                    "highlights": "universitario"

                }, {
                    "id": "nt8",
                    "text": "Química aplicada",
                    "highlights": "secundario"

                }, {
                    "id": "nt9",
                    "text": "Química aplicada",
                    "highlights": "universitario"

                }, {
                    "id": "nu0",
                    "text": "Química biológica",
                    "highlights": "universitario"

                }, {
                    "id": "nu1",
                    "text": "Química del carbono",
                    "highlights": "secundario"

                }, {
                    "id": "nu2",
                    "text": "Química general e inorgánica",
                    "highlights": "secundario"

                }, {
                    "id": "nu3",
                    "text": "Química general e inorgánica",
                    "highlights": "universitario"

                }, {
                    "id": "nu4",
                    "text": "Química general II",
                    "highlights": "universitario"

                }, {
                    "id": "nu5",
                    "text": "Química general para ingeniería",
                    "highlights": "universitario"

                }, {
                    "id": "nu6",
                    "text": "Química I",
                    "highlights": "universitario"

                }, {
                    "id": "nu7",
                    "text": "Química industrial",
                    "highlights": "secundario"

                }, {
                    "id": "nu8",
                    "text": "Química industrial I",
                    "highlights": "secundario"

                }, {
                    "id": "nu9",
                    "text": "Química industrial II",
                    "highlights": "secundario"

                }, {
                    "id": "nx0",
                    "text": "Química inorgánica",
                    "highlights": "secundario"

                }, {
                    "id": "nx1",
                    "text": "Química inorgánica",
                    "highlights": "universitario"

                }, {
                    "id": "nx2",
                    "text": "Química orgánica",
                    "highlights": "secundario"

                }, {
                    "id": "nx3",
                    "text": "Química orgánica I",
                    "highlights": "universitario"

                }, {
                    "id": "nx4",
                    "text": "Química orgánica II",
                    "highlights": "universitario"

                }, {
                    "id": "nx5",
                    "text": "Química orgánica y biológica",
                    "highlights": "secundario"

                }, {
                    "id": "nx6",
                    "text": "Química orgánica y bio-orgánica",
                    "highlights": "secundario"

                }

            ],

            'QUIMICA': [


                {
                    "id": "nt1",
                    "text": "Química",
                    "highlights": "secundario"

                }, {
                    "id": "nt2",
                    "text": "Química",
                    "highlights": "tertiary",

                }, {
                    "id": "nt3",
                    "text": "Química",
                    "highlights": "universitario"

                }, {
                    "id": "nt4",
                    "text": "Química, alimentación y salud",
                    "highlights": "secundario"

                }, {
                    "id": "nt5",
                    "text": "Química analítica",
                    "highlights": "secundario"

                }, {
                    "id": "nt6",
                    "text": "Química analítica general",
                    "highlights": "universitario"

                }, {
                    "id": "nt7",
                    "text": "Química analítica instrumental",
                    "highlights": "universitario"

                }, {
                    "id": "nt8",
                    "text": "Química aplicada",
                    "highlights": "secundario"

                }, {
                    "id": "nt9",
                    "text": "Química aplicada",
                    "highlights": "universitario"

                }, {
                    "id": "nu0",
                    "text": "Química biológica",
                    "highlights": "universitario"

                }, {
                    "id": "nu1",
                    "text": "Química del carbono",
                    "highlights": "secundario"

                }, {
                    "id": "nu2",
                    "text": "Química general e inorgánica",
                    "highlights": "secundario"

                }, {
                    "id": "nu3",
                    "text": "Química general e inorgánica",
                    "highlights": "universitario"

                }, {
                    "id": "nu4",
                    "text": "Química general II",
                    "highlights": "universitario"

                }, {
                    "id": "nu5",
                    "text": "Química general para ingeniería",
                    "highlights": "universitario"

                }, {
                    "id": "nu6",
                    "text": "Química I",
                    "highlights": "universitario"

                }, {
                    "id": "nu7",
                    "text": "Química industrial",
                    "highlights": "secundario"

                }, {
                    "id": "nu8",
                    "text": "Química industrial I",
                    "highlights": "secundario"

                }, {
                    "id": "nu9",
                    "text": "Química industrial II",
                    "highlights": "secundario"

                }, {
                    "id": "nx0",
                    "text": "Química inorgánica",
                    "highlights": "secundario"

                }, {
                    "id": "nx1",
                    "text": "Química inorgánica",
                    "highlights": "universitario"

                }, {
                    "id": "nx2",
                    "text": "Química orgánica",
                    "highlights": "secundario"

                }, {
                    "id": "nx3",
                    "text": "Química orgánica I",
                    "highlights": "universitario"

                }, {
                    "id": "nx4",
                    "text": "Química orgánica II",
                    "highlights": "universitario"

                }, {
                    "id": "nx5",
                    "text": "Química orgánica y biológica",
                    "highlights": "secundario"

                }, {
                    "id": "nx6",
                    "text": "Química orgánica y bio-orgánica",
                    "highlights": "secundario"

                }
            ],


            'R': [


                {
                    "id": "nx7",
                    "text": "Resistencia de materiales",
                    "highlights": "universitario"

                }, {
                    "id": "nx8",
                    "text": "Resistencia y ensayo de materiales",
                    "highlights": "secundario"

                }, {
                    "id": "nx9",
                    "text": "Resolución de problemas y algoritmos",
                    "highlights": "universitario"

                }, {
                    "id": "nz0",
                    "text": "Revit",
                    "highlights": "avanzado"

                }, {
                    "id": "nz1",
                    "text": "Revit",
                    "highlights": "basico"

                }, {
                    "id": "nz2",
                    "text": "Revit",
                    "highlights": "intermedio"

                }


            ],

            'RE': [


                {
                    "id": "nx7",
                    "text": "Resistencia de materiales",
                    "highlights": "universitario"

                }, {
                    "id": "nx8",
                    "text": "Resistencia y ensayo de materiales",
                    "highlights": "secundario"

                }, {
                    "id": "nx9",
                    "text": "Resolución de problemas y algoritmos",
                    "highlights": "universitario"

                }, {
                    "id": "nz0",
                    "text": "Revit",
                    "highlights": "avanzado"

                }, {
                    "id": "nz1",
                    "text": "Revit",
                    "highlights": "basico"

                }, {
                    "id": "nz2",
                    "text": "Revit",
                    "highlights": "intermedio"

                }
            ],

            'REV': [

                {
                    "id": "nz0",
                    "text": "Revit",
                    "highlights": "avanzado"

                }, {
                    "id": "nz1",
                    "text": "Revit",
                    "highlights": "basico"

                }, {
                    "id": "nz2",
                    "text": "Revit",
                    "highlights": "intermedio"

                }
            ],

            'REVI': [

                {
                    "id": "nz0",
                    "text": "Revit",
                    "highlights": "avanzado"

                }, {
                    "id": "nz1",
                    "text": "Revit",
                    "highlights": "basico"

                }, {
                    "id": "nz2",
                    "text": "Revit",
                    "highlights": "intermedio"

                }
            ],

            'REVIT': [

                {
                    "id": "nz0",
                    "text": "Revit",
                    "highlights": "avanzado"

                }, {
                    "id": "nz1",
                    "text": "Revit",
                    "highlights": "basico"

                }, {
                    "id": "nz2",
                    "text": "Revit",
                    "highlights": "intermedio"

                }
            ],

            'RES': [


                {
                    "id": "nx7",
                    "text": "Resistencia de materiales",
                    "highlights": "universitario"

                }, {
                    "id": "nx8",
                    "text": "Resistencia y ensayo de materiales",
                    "highlights": "secundario"

                }, {
                    "id": "nx9",
                    "text": "Resolución de problemas y algoritmos",
                    "highlights": "universitario"

                }
            ],

            'RESI': [


                {
                    "id": "nx7",
                    "text": "Resistencia de materiales",
                    "highlights": "universitario"

                }, {
                    "id": "nx8",
                    "text": "Resistencia y ensayo de materiales",
                    "highlights": "secundario"

                }, {
                    "id": "nx9",
                    "text": "Resolución de problemas y algoritmos",
                    "highlights": "universitario"

                }

            ],

            'RESO': [

                {
                    "id": "nx9",
                    "text": "Resolución de problemas y algoritmos",
                    "highlights": "universitario"

                }
            ],

            'RESOL': [

                {
                    "id": "nx9",
                    "text": "Resolución de problemas y algoritmos",
                    "highlights": "universitario"

                }
            ],

            'RESOLU': [

                {
                    "id": "nx9",
                    "text": "Resolución de problemas y algoritmos",
                    "highlights": "universitario"

                }
            ],

            'RESOLUC': [

                {
                    "id": "nx9",
                    "text": "Resolución de problemas y algoritmos",
                    "highlights": "universitario"

                }
            ],

            'RESOLUCI': [

                {
                    "id": "nx9",
                    "text": "Resolución de problemas y algoritmos",
                    "highlights": "universitario"

                }
            ],

            'RESOLUCIO': [

                {
                    "id": "nx9",
                    "text": "Resolución de problemas y algoritmos",
                    "highlights": "universitario"

                }
            ],

            'RESOLUCION': [

                {
                    "id": "nx9",
                    "text": "Resolución de problemas y algoritmos",
                    "highlights": "universitario"

                }
            ],

            'RESI': [


                {
                    "id": "nx7",
                    "text": "Resistencia de materiales",
                    "highlights": "universitario"

                }, {
                    "id": "nx8",
                    "text": "Resistencia y ensayo de materiales",
                    "highlights": "secundario"

                }
            ],

            'RESIS': [


                {
                    "id": "nx7",
                    "text": "Resistencia de materiales",
                    "highlights": "universitario"

                }, {
                    "id": "nx8",
                    "text": "Resistencia y ensayo de materiales",
                    "highlights": "secundario"

                }
            ],

            'RESIST': [


                {
                    "id": "nx7",
                    "text": "Resistencia de materiales",
                    "highlights": "universitario"

                }, {
                    "id": "nx8",
                    "text": "Resistencia y ensayo de materiales",
                    "highlights": "secundario"

                }
            ],

            'RESISTE': [


                {
                    "id": "nx7",
                    "text": "Resistencia de materiales",
                    "highlights": "universitario"

                }, {
                    "id": "nx8",
                    "text": "Resistencia y ensayo de materiales",
                    "highlights": "secundario"

                }
            ],

            'RESISTEN': [


                {
                    "id": "nx7",
                    "text": "Resistencia de materiales",
                    "highlights": "universitario"

                }, {
                    "id": "nx8",
                    "text": "Resistencia y ensayo de materiales",
                    "highlights": "secundario"

                }
            ],

            'RESISTENC': [


                {
                    "id": "nx7",
                    "text": "Resistencia de materiales",
                    "highlights": "universitario"

                }, {
                    "id": "nx8",
                    "text": "Resistencia y ensayo de materiales",
                    "highlights": "secundario"

                }
            ],

            'RESISTENCI': [


                {
                    "id": "nx7",
                    "text": "Resistencia de materiales",
                    "highlights": "universitario"

                }, {
                    "id": "nx8",
                    "text": "Resistencia y ensayo de materiales",
                    "highlights": "secundario"

                }
            ],

            'RESISTENCIA': [


                {
                    "id": "nx7",
                    "text": "Resistencia de materiales",
                    "highlights": "universitario"

                }, {
                    "id": "nx8",
                    "text": "Resistencia y ensayo de materiales",
                    "highlights": "secundario"

                }
            ],



            'S': [


                {
                    "id": "nz3",
                    "text": "Salud colectiva I",
                    "highlights": "universitario"

                }, {
                    "id": "nz4",
                    "text": "Salud colectiva II",
                    "highlights": "universitario"

                }, {
                    "id": "nz5",
                    "text": "Salud mental",
                    "highlights": "universitario"

                }, {
                    "id": "nz6",
                    "text": "Saxo",
                    "highlights": "avanzado"

                }, {
                    "id": "nz7",
                    "text": "Saxo",
                    "highlights": "basico"

                }, {
                    "id": "nz8",
                    "text": "Saxo",
                    "highlights": "intermedio"

                }, {
                    "id": "nz9",
                    "text": "Semiología",
                    "highlights": "universitario"

                }, {
                    "id": "oa1",
                    "text": "Sistema de costos",
                    "highlights": "universitario"

                }, {
                    "id": "oa2",
                    "text": "Sistema de representación geométrica",
                    "highlights": "universitario"

                }, {
                    "id": "oa3",
                    "text": "Sistemas administrativos",
                    "highlights": "secundario"

                }, {
                    "id": "oa5",
                    "text": "Sistemas de información contable",
                    "highlights": "secundario"

                }, {
                    "id": "oa6",
                    "text": "Sistemas de representación",
                    "highlights": "universitario"

                }, {
                    "id": "oa7",
                    "text": "Sistemas digitales",
                    "highlights": "secundario"

                }, {
                    "id": "oa8",
                    "text": "Sketchup",
                    "highlights": "avanzado"

                }, {
                    "id": "oa9",
                    "text": "Sketchup",
                    "highlights": "basico"

                }, {
                    "id": "ob0",
                    "text": "Sketchup",
                    "highlights": "intermedio"

                }, {
                    "id": "ob4",
                    "text": "Sociedades y asociaciones",
                    "highlights": "universitario"

                }, {
                    "id": "ob5",
                    "text": "Sociología",
                    "highlights": "secundario"

                }, {
                    "id": "ob6",
                    "text": "Sociología",
                    "highlights": "universitario"

                }, {
                    "id": "ob7",
                    "text": "Sociología y antropología general",
                    "highlights": "universitario"

                }


            ],


            'SA': [

                {
                    "id": "nz3",
                    "text": "Salud colectiva I",
                    "highlights": "universitario"

                }, {
                    "id": "nz4",
                    "text": "Salud colectiva II",
                    "highlights": "universitario"

                }, {
                    "id": "nz5",
                    "text": "Salud mental",
                    "highlights": "universitario"

                }, {
                    "id": "nz6",
                    "text": "Saxo",
                    "highlights": "avanzado"

                }, {
                    "id": "nz7",
                    "text": "Saxo",
                    "highlights": "basico"

                }, {
                    "id": "nz8",
                    "text": "Saxo",
                    "highlights": "intermedio"

                }
            ],


            'SAL': [

                {
                    "id": "nz3",
                    "text": "Salud colectiva I",
                    "highlights": "universitario"

                }, {
                    "id": "nz4",
                    "text": "Salud colectiva II",
                    "highlights": "universitario"

                }, {
                    "id": "nz5",
                    "text": "Salud mental",
                    "highlights": "universitario"

                }
            ],

            'SALU': [

                {
                    "id": "nz3",
                    "text": "Salud colectiva I",
                    "highlights": "universitario"

                }, {
                    "id": "nz4",
                    "text": "Salud colectiva II",
                    "highlights": "universitario"

                }, {
                    "id": "nz5",
                    "text": "Salud mental",
                    "highlights": "universitario"

                }
            ],

            'SALUD': [

                {
                    "id": "nz3",
                    "text": "Salud colectiva I",
                    "highlights": "universitario"

                }, {
                    "id": "nz4",
                    "text": "Salud colectiva II",
                    "highlights": "universitario"

                }, {
                    "id": "nz5",
                    "text": "Salud mental",
                    "highlights": "universitario"

                }
            ],

            'SAX': [

                {
                    "id": "nz6",
                    "text": "Saxo",
                    "highlights": "avanzado"

                }, {
                    "id": "nz7",
                    "text": "Saxo",
                    "highlights": "basico"

                }, {
                    "id": "nz8",
                    "text": "Saxo",
                    "highlights": "intermedio"

                }
            ],


            'SAXO': [

                {
                    "id": "nz6",
                    "text": "Saxo",
                    "highlights": "avanzado"

                }, {
                    "id": "nz7",
                    "text": "Saxo",
                    "highlights": "basico"

                }, {
                    "id": "nz8",
                    "text": "Saxo",
                    "highlights": "intermedio"

                }
            ],


            'SE': [

                {
                    "id": "nz9",
                    "text": "Semiología",
                    "highlights": "universitario"

                }

            ],

            'SEM': [

                {
                    "id": "nz9",
                    "text": "Semiología",
                    "highlights": "universitario"

                }

            ],

            'SEMI': [

                {
                    "id": "nz9",
                    "text": "Semiología",
                    "highlights": "universitario"

                }

            ],

            'SEMIO': [

                {
                    "id": "nz9",
                    "text": "Semiología",
                    "highlights": "universitario"

                }

            ],

            'SEMIOL': [

                {
                    "id": "nz9",
                    "text": "Semiología",
                    "highlights": "universitario"

                }

            ],


            'SEMIOLO': [

                {
                    "id": "nz9",
                    "text": "Semiología",
                    "highlights": "universitario"

                }

            ],

            'SEMIOLOG': [

                {
                    "id": "nz9",
                    "text": "Semiología",
                    "highlights": "universitario"

                }

            ],

            'SEMIOLOGI': [

                {
                    "id": "nz9",
                    "text": "Semiología",
                    "highlights": "universitario"

                }

            ],

            'SEMIOLOGIA': [

                {
                    "id": "nz9",
                    "text": "Semiología",
                    "highlights": "universitario"

                }

            ],


            'SI': [

                {
                    "id": "oa1",
                    "text": "Sistema de costos",
                    "highlights": "universitario"

                }, {
                    "id": "oa2",
                    "text": "Sistema de representación geométrica",
                    "highlights": "universitario"

                }, {
                    "id": "oa3",
                    "text": "Sistemas administrativos",
                    "highlights": "secundario"

                }, {
                    "id": "oa4",
                    "text": "Sistemas constructivos",
                    "highlights": "secundario"

                }, {
                    "id": "oa5",
                    "text": "Sistemas de información contable",
                    "highlights": "secundario"

                }, {
                    "id": "oa6",
                    "text": "Sistemas de representación",
                    "highlights": "universitario"

                }, {
                    "id": "oa7",
                    "text": "Sistemas digitales",
                    "highlights": "secundario"

                }

            ],

            'SIS': [

                {
                    "id": "oa1",
                    "text": "Sistema de costos",
                    "highlights": "universitario"

                }, {
                    "id": "oa2",
                    "text": "Sistema de representación geométrica",
                    "highlights": "universitario"

                }, {
                    "id": "oa3",
                    "text": "Sistemas administrativos",
                    "highlights": "secundario"

                }, {
                    "id": "oa4",
                    "text": "Sistemas constructivos",
                    "highlights": "secundario"

                }, {
                    "id": "oa5",
                    "text": "Sistemas de información contable",
                    "highlights": "secundario"

                }, {
                    "id": "oa6",
                    "text": "Sistemas de representación",
                    "highlights": "universitario"

                }, {
                    "id": "oa7",
                    "text": "Sistemas digitales",
                    "highlights": "secundario"

                }

            ],


            'SIST': [

                {
                    "id": "oa1",
                    "text": "Sistema de costos",
                    "highlights": "universitario"

                }, {
                    "id": "oa2",
                    "text": "Sistema de representación geométrica",
                    "highlights": "universitario"

                }, {
                    "id": "oa3",
                    "text": "Sistemas administrativos",
                    "highlights": "secundario"

                }, {
                    "id": "oa4",
                    "text": "Sistemas constructivos",
                    "highlights": "secundario"

                }, {
                    "id": "oa5",
                    "text": "Sistemas de información contable",
                    "highlights": "secundario"

                }, {
                    "id": "oa6",
                    "text": "Sistemas de representación",
                    "highlights": "universitario"

                }, {
                    "id": "oa7",
                    "text": "Sistemas digitales",
                    "highlights": "secundario"

                }

            ],

            'SISTE': [

                {
                    "id": "oa1",
                    "text": "Sistema de costos",
                    "highlights": "universitario"

                }, {
                    "id": "oa2",
                    "text": "Sistema de representación geométrica",
                    "highlights": "universitario"

                }, {
                    "id": "oa3",
                    "text": "Sistemas administrativos",
                    "highlights": "secundario"

                }, {
                    "id": "oa4",
                    "text": "Sistemas constructivos",
                    "highlights": "secundario"

                }, {
                    "id": "oa5",
                    "text": "Sistemas de información contable",
                    "highlights": "secundario"

                }, {
                    "id": "oa6",
                    "text": "Sistemas de representación",
                    "highlights": "universitario"

                }, {
                    "id": "oa7",
                    "text": "Sistemas digitales",
                    "highlights": "secundario"

                }

            ],

            'SISTEM': [

                {
                    "id": "oa1",
                    "text": "Sistema de costos",
                    "highlights": "universitario"

                }, {
                    "id": "oa2",
                    "text": "Sistema de representación geométrica",
                    "highlights": "universitario"

                }, {
                    "id": "oa3",
                    "text": "Sistemas administrativos",
                    "highlights": "secundario"

                }, {
                    "id": "oa4",
                    "text": "Sistemas constructivos",
                    "highlights": "secundario"

                }, {
                    "id": "oa5",
                    "text": "Sistemas de información contable",
                    "highlights": "secundario"

                }, {
                    "id": "oa6",
                    "text": "Sistemas de representación",
                    "highlights": "universitario"

                }, {
                    "id": "oa7",
                    "text": "Sistemas digitales",
                    "highlights": "secundario"

                }

            ],

            'SISTEMA': [

                {
                    "id": "oa1",
                    "text": "Sistema de costos",
                    "highlights": "universitario"

                }, {
                    "id": "oa2",
                    "text": "Sistema de representación geométrica",
                    "highlights": "universitario"

                }, {
                    "id": "oa3",
                    "text": "Sistemas administrativos",
                    "highlights": "secundario"

                }, {
                    "id": "oa4",
                    "text": "Sistemas constructivos",
                    "highlights": "secundario"

                }, {
                    "id": "oa5",
                    "text": "Sistemas de información contable",
                    "highlights": "secundario"

                }, {
                    "id": "oa6",
                    "text": "Sistemas de representación",
                    "highlights": "universitario"

                }, {
                    "id": "oa7",
                    "text": "Sistemas digitales",
                    "highlights": "secundario"

                }

            ],

            'SK': [

                {
                    "id": "oa8",
                    "text": "Sketchup",
                    "highlights": "avanzado"

                }, {
                    "id": "oa9",
                    "text": "Sketchup",
                    "highlights": "basico"

                }, {
                    "id": "ob0",
                    "text": "Sketchup",
                    "highlights": "intermedio"

                }, {
                    "id": "ob1",
                    "text": "Sketchup",
                    "highlights": "intermedio"

                }, {
                    "id": "ob2",
                    "text": "Sketchup",
                    "highlights": "intermedio"

                }, {
                    "id": "ob3",
                    "text": "Sketchup",
                    "highlights": "intermedio"

                }

            ],


            'SKE': [

                {
                    "id": "oa8",
                    "text": "Sketchup",
                    "highlights": "avanzado"

                }, {
                    "id": "oa9",
                    "text": "Sketchup",
                    "highlights": "basico"

                }, {
                    "id": "ob0",
                    "text": "Sketchup",
                    "highlights": "intermedio"

                }, {
                    "id": "ob1",
                    "text": "Sketchup",
                    "highlights": "intermedio"

                }, {
                    "id": "ob2",
                    "text": "Sketchup",
                    "highlights": "intermedio"

                }, {
                    "id": "ob3",
                    "text": "Sketchup",
                    "highlights": "intermedio"

                }

            ],

            'SKET': [

                {
                    "id": "oa8",
                    "text": "Sketchup",
                    "highlights": "avanzado"

                }, {
                    "id": "oa9",
                    "text": "Sketchup",
                    "highlights": "basico"

                }, {
                    "id": "ob0",
                    "text": "Sketchup",
                    "highlights": "intermedio"

                }, {
                    "id": "ob1",
                    "text": "Sketchup",
                    "highlights": "intermedio"

                }, {
                    "id": "ob2",
                    "text": "Sketchup",
                    "highlights": "intermedio"

                }, {
                    "id": "ob3",
                    "text": "Sketchup",
                    "highlights": "intermedio"

                }

            ],

            'SKETC': [

                {
                    "id": "oa8",
                    "text": "Sketchup",
                    "highlights": "avanzado"

                }, {
                    "id": "oa9",
                    "text": "Sketchup",
                    "highlights": "basico"

                }, {
                    "id": "ob0",
                    "text": "Sketchup",
                    "highlights": "intermedio"

                }, {
                    "id": "ob1",
                    "text": "Sketchup",
                    "highlights": "intermedio"

                }, {
                    "id": "ob2",
                    "text": "Sketchup",
                    "highlights": "intermedio"

                }, {
                    "id": "ob3",
                    "text": "Sketchup",
                    "highlights": "intermedio"

                }

            ],


            'SKETCH': [

                {
                    "id": "oa8",
                    "text": "Sketchup",
                    "highlights": "avanzado"

                }, {
                    "id": "oa9",
                    "text": "Sketchup",
                    "highlights": "basico"

                }, {
                    "id": "ob0",
                    "text": "Sketchup",
                    "highlights": "intermedio"

                }, {
                    "id": "ob1",
                    "text": "Sketchup",
                    "highlights": "intermedio"

                }, {
                    "id": "ob2",
                    "text": "Sketchup",
                    "highlights": "intermedio"

                }, {
                    "id": "ob3",
                    "text": "Sketchup",
                    "highlights": "intermedio"

                }

            ],

            'SKETCHU': [

                {
                    "id": "oa8",
                    "text": "Sketchup",
                    "highlights": "avanzado"

                }, {
                    "id": "oa9",
                    "text": "Sketchup",
                    "highlights": "basico"

                }, {
                    "id": "ob0",
                    "text": "Sketchup",
                    "highlights": "intermedio"

                }, {
                    "id": "ob1",
                    "text": "Sketchup",
                    "highlights": "intermedio"

                }, {
                    "id": "ob2",
                    "text": "Sketchup",
                    "highlights": "intermedio"

                }, {
                    "id": "ob3",
                    "text": "Sketchup",
                    "highlights": "intermedio"

                }

            ],

            'SKETCHUP': [

                {
                    "id": "oa8",
                    "text": "Sketchup",
                    "highlights": "avanzado"

                }, {
                    "id": "oa9",
                    "text": "Sketchup",
                    "highlights": "basico"

                }, {
                    "id": "ob0",
                    "text": "Sketchup",
                    "highlights": "intermedio"

                }, {
                    "id": "ob1",
                    "text": "Sketchup",
                    "highlights": "intermedio"

                }, {
                    "id": "ob2",
                    "text": "Sketchup",
                    "highlights": "intermedio"

                }, {
                    "id": "ob3",
                    "text": "Sketchup",
                    "highlights": "intermedio"

                }

            ],


            'SO': [{
                    "id": "ob4",
                    "text": "Sociedades y asociaciones",
                    "highlights": "universitario"

                }, {
                    "id": "ob5",
                    "text": "Sociología",
                    "highlights": "secundario"

                }, {
                    "id": "ob6",
                    "text": "Sociología",
                    "highlights": "universitario"

                }, {
                    "id": "ob7",
                    "text": "Sociología y antropología general",
                    "highlights": "universitario"

                }
            ],

            'SOC': [{
                    "id": "ob4",
                    "text": "Sociedades y asociaciones",
                    "highlights": "universitario"

                }, {
                    "id": "ob5",
                    "text": "Sociología",
                    "highlights": "secundario"

                }, {
                    "id": "ob6",
                    "text": "Sociología",
                    "highlights": "universitario"

                }, {
                    "id": "ob7",
                    "text": "Sociología y antropología general",
                    "highlights": "universitario"

                }
            ],

            'SOCI': [{
                    "id": "ob4",
                    "text": "Sociedades y asociaciones",
                    "highlights": "universitario"

                }, {
                    "id": "ob5",
                    "text": "Sociología",
                    "highlights": "secundario"

                }, {
                    "id": "ob6",
                    "text": "Sociología",
                    "highlights": "universitario"

                }, {
                    "id": "ob7",
                    "text": "Sociología y antropología general",
                    "highlights": "universitario"

                }
            ],

            'SOCIO': [{
                    "id": "ob4",
                    "text": "Sociedades y asociaciones",
                    "highlights": "universitario"

                }, {
                    "id": "ob5",
                    "text": "Sociología",
                    "highlights": "secundario"

                }, {
                    "id": "ob6",
                    "text": "Sociología",
                    "highlights": "universitario"

                }, {
                    "id": "ob7",
                    "text": "Sociología y antropología general",
                    "highlights": "universitario"

                }
            ],

            'SOCIOL': [{
                    "id": "ob4",
                    "text": "Sociedades y asociaciones",
                    "highlights": "universitario"

                }, {
                    "id": "ob5",
                    "text": "Sociología",
                    "highlights": "secundario"

                }, {
                    "id": "ob6",
                    "text": "Sociología",
                    "highlights": "universitario"

                }, {
                    "id": "ob7",
                    "text": "Sociología y antropología general",
                    "highlights": "universitario"

                }
            ],

            'SOCIOLO': [{
                    "id": "ob4",
                    "text": "Sociedades y asociaciones",
                    "highlights": "universitario"

                }, {
                    "id": "ob5",
                    "text": "Sociología",
                    "highlights": "secundario"

                }, {
                    "id": "ob6",
                    "text": "Sociología",
                    "highlights": "universitario"

                }, {
                    "id": "ob7",
                    "text": "Sociología y antropología general",
                    "highlights": "universitario"

                }
            ],

            'SOCIOLOG': [{
                    "id": "ob4",
                    "text": "Sociedades y asociaciones",
                    "highlights": "universitario"

                }, {
                    "id": "ob5",
                    "text": "Sociología",
                    "highlights": "secundario"

                }, {
                    "id": "ob6",
                    "text": "Sociología",
                    "highlights": "universitario"

                }, {
                    "id": "ob7",
                    "text": "Sociología y antropología general",
                    "highlights": "universitario"

                }
            ],

            'SOCIOLOGI': [{
                    "id": "ob4",
                    "text": "Sociedades y asociaciones",
                    "highlights": "universitario"

                }, {
                    "id": "ob5",
                    "text": "Sociología",
                    "highlights": "secundario"

                }, {
                    "id": "ob6",
                    "text": "Sociología",
                    "highlights": "universitario"

                }, {
                    "id": "ob7",
                    "text": "Sociología y antropología general",
                    "highlights": "universitario"

                }
            ],

            'SOCIOLOGIA': [{
                    "id": "ob4",
                    "text": "Sociedades y asociaciones",
                    "highlights": "universitario"

                }, {
                    "id": "ob5",
                    "text": "Sociología",
                    "highlights": "secundario"

                }, {
                    "id": "ob6",
                    "text": "Sociología",
                    "highlights": "universitario"

                }, {
                    "id": "ob7",
                    "text": "Sociología y antropología general",
                    "highlights": "universitario"

                }
            ],


            'T': [

                {
                    "id": "oo8",
                    "text": "Taller de comprensión y producción de discursos",
                    "highlights": "universitario"

                }, {
                    "id": "ob9",
                    "text": "Taller de comprensión y producción de discursos H",
                    "highlights": "universitario"

                }, {
                    "id": "oc0",
                    "text": "Taller de dibujo",
                    "highlights": "universitario"

                }, {
                    "id": "oc1",
                    "text": "Taller de programación",
                    "highlights": "secundario"

                }, {
                    "id": "oc2",
                    "text": "Tango",
                    "highlights": "basico"

                }, {
                    "id": "oc3",
                    "text": "Técnicas de producción",
                    "highlights": "universitario"

                }, {
                    "id": "oc4",
                    "text": "Tecnología electrónica",
                    "highlights": "secundario"

                }, {
                    "id": "oc5",
                    "text": "Tecnología I",
                    "highlights": "universitario"

                }, {
                    "id": "oc6",
                    "text": "Tecnologías de la información",
                    "highlights": "secundario"

                }, {
                    "id": "oc7",
                    "text": "Tecnologías de la información - Ciencias naturales",
                    "highlights": "secundario"

                }, {
                    "id": "oc8",
                    "text": "Tecnologías de la información - Ciencias sociales",
                    "highlights": "secundario"

                }, {
                    "id": "oc9",
                    "text": "Tecnologías de la información - Economía y administración",
                    "highlights": "secundario"

                }, {
                    "id": "od0",
                    "text": "Tecnologías de la información - Informática",
                    "highlights": "secundario"

                }, {
                    "id": "od1",
                    "text": "Teoría contable",
                    "highlights": "universitario"

                }, {
                    "id": "od2",
                    "text": "Teoría política y derecho público",
                    "highlights": "universitario"

                }, {
                    "id": "od3",
                    "text": "Teoría social",
                    "highlights": "universitario"

                }, {
                    "id": "od4",
                    "text": "Teoría y técnica impositiva",
                    "highlights": "secundario"

                }, {
                    "id": "od5",
                    "text": "Teoría y técnica impositiva II",
                    "highlights": "universitario"

                }, {
                    "id": "od6",
                    "text": "Teoría y técnica tributaria I",
                    "highlights": "universitario"

                }, {
                    "id": "od7",
                    "text": "Teoría y técnica tributaria II",
                    "highlights": "universitario"

                }, {
                    "id": "od8",
                    "text": "Termodinámica y máquinas térmicas",
                    "highlights": "secundario"

                }, {
                    "id": "od9",
                    "text": "Test of english as a foreign language - TOEFL",
                    "highlights": "avanzado"

                }, {
                    "id": "oe0",
                    "text": "Tipografía I",
                    "highlights": "universitario"

                }, {
                    "id": "oe1",
                    "text": "Trabajo y tiempo libre",
                    "highlights": "universitario"

                }, {
                    "id": "oe2",
                    "text": "Trompeta",
                    "highlights": "avanzado"

                }, {
                    "id": "oe3",
                    "text": "Trompeta",
                    "highlights": "basico"

                }, {
                    "id": "oe4",
                    "text": "Trompeta",
                    "highlights": "intermedio"

                }

            ],


            'TA': [

                {
                    "id": "oo8",
                    "text": "Taller de comprensión y producción de discursos",
                    "highlights": "universitario"

                }, {
                    "id": "ob9",
                    "text": "Taller de comprensión y producción de discursos H",
                    "highlights": "universitario"

                }, {
                    "id": "oc0",
                    "text": "Taller de dibujo",
                    "highlights": "universitario"

                }, {
                    "id": "oc1",
                    "text": "Taller de programación",
                    "highlights": "secundario"

                }, {
                    "id": "oc2",
                    "text": "Tango",
                    "highlights": "basico"

                }
            ],


            'TA': [
                {
                    "id": "oc2",
                    "text": "Tango",
                    "highlights": "basico"

                }
            ],

            'TAN': [
                {
                    "id": "oc2",
                    "text": "Tango",
                    "highlights": "basico"

                }
            ],

            'TANG': [
                {
                    "id": "oc2",
                    "text": "Tango",
                    "highlights": "basico"

                }
            ],

            'TANGO': [
                {
                    "id": "oc2",
                    "text": "Tango",
                    "highlights": "basico"

                }
            ],

            'TAL': [

                {
                    "id": "oo8",
                    "text": "Taller de comprensión y producción de discursos",
                    "highlights": "universitario"

                }, {
                    "id": "ob9",
                    "text": "Taller de comprensión y producción de discursos H",
                    "highlights": "universitario"

                }, {
                    "id": "oc0",
                    "text": "Taller de dibujo",
                    "highlights": "universitario"

                }, {
                    "id": "oc1",
                    "text": "Taller de programación",
                    "highlights": "secundario"

                }
            ],


            'TALL': [

                {
                    "id": "oo8",
                    "text": "Taller de comprensión y producción de discursos",
                    "highlights": "universitario"

                }, {
                    "id": "ob9",
                    "text": "Taller de comprensión y producción de discursos H",
                    "highlights": "universitario"

                }, {
                    "id": "oc0",
                    "text": "Taller de dibujo",
                    "highlights": "universitario"

                }, {
                    "id": "oc1",
                    "text": "Taller de programación",
                    "highlights": "secundario"

                }
            ],

            'TALLE': [

                {
                    "id": "oo8",
                    "text": "Taller de comprensión y producción de discursos",
                    "highlights": "universitario"

                }, {
                    "id": "ob9",
                    "text": "Taller de comprensión y producción de discursos H",
                    "highlights": "universitario"

                }, {
                    "id": "oc0",
                    "text": "Taller de dibujo",
                    "highlights": "universitario"

                }, {
                    "id": "oc1",
                    "text": "Taller de programación",
                    "highlights": "secundario"

                }
            ],

            'TALLER': [

                {
                    "id": "oo8",
                    "text": "Taller de comprensión y producción de discursos",
                    "highlights": "universitario"

                }, {
                    "id": "ob9",
                    "text": "Taller de comprensión y producción de discursos H",
                    "highlights": "universitario"

                }, {
                    "id": "oc0",
                    "text": "Taller de dibujo",
                    "highlights": "universitario"

                }, {
                    "id": "oc1",
                    "text": "Taller de programación",
                    "highlights": "secundario"

                }
            ],


            'V': [{
                "id": "oe4",
                "text": "Violín",
                "highlights": "avanzado"

            }, {
                "id": "oe5",
                "text": "Violín",
                "highlights": "basico"

            }, {
                "id": "oe6",
                "text": "Violín",
                "highlights": "intermedio"

            }, {
                "id": "oe7",
                "text": "Violoncello",
                "highlights": "avanzado"

            }, {
                "id": "oe8",
                "text": "Violoncello",
                "highlights": "basico"

            }, {
                "id": "oe9",
                "text": "Violoncello",
                "highlights": "intermedio"

            }],

            'VI': [{
                "id": "oe4",
                "text": "Violín",
                "highlights": "avanzado"

            }, {
                "id": "oe5",
                "text": "Violín",
                "highlights": "basico"

            }, {
                "id": "oe6",
                "text": "Violín",
                "highlights": "intermedio"

            }, {
                "id": "oe7",
                "text": "Violoncello",
                "highlights": "avanzado"

            }, {
                "id": "oe8",
                "text": "Violoncello",
                "highlights": "basico"

            }, {
                "id": "oe9",
                "text": "Violoncello",
                "highlights": "intermedio"

            }],

            'VIO': [{
                "id": "oe4",
                "text": "Violín",
                "highlights": "avanzado"

            }, {
                "id": "oe5",
                "text": "Violín",
                "highlights": "basico"

            }, {
                "id": "oe6",
                "text": "Violín",
                "highlights": "intermedio"

            }, {
                "id": "oe7",
                "text": "Violoncello",
                "highlights": "avanzado"

            }, {
                "id": "oe8",
                "text": "Violoncello",
                "highlights": "basico"

            }, {
                "id": "oe9",
                "text": "Violoncello",
                "highlights": "intermedio"

            }],

            'VIOL': [{
                "id": "oe4",
                "text": "Violín",
                "highlights": "avanzado"

            }, {
                "id": "oe5",
                "text": "Violín",
                "highlights": "basico"

            }, {
                "id": "oe6",
                "text": "Violín",
                "highlights": "intermedio"

            }, {
                "id": "oe7",
                "text": "Violoncello",
                "highlights": "avanzado"

            }, {
                "id": "oe8",
                "text": "Violoncello",
                "highlights": "basico"

            }, {
                "id": "oe9",
                "text": "Violoncello",
                "highlights": "intermedio"

            }],

            'VIOLI': [{
                "id": "oe4",
                "text": "Violín",
                "highlights": "avanzado"

            }, {
                "id": "oe5",
                "text": "Violín",
                "highlights": "basico"

            }, {
                "id": "oe6",
                "text": "Violín",
                "highlights": "intermedio"

            }, {
                "id": "oe7",
                "text": "Violoncello",
                "highlights": "avanzado"

            }, {
                "id": "oe8",
                "text": "Violoncello",
                "highlights": "basico"

            }, {
                "id": "oe9",
                "text": "Violoncello",
                "highlights": "intermedio"

            }],

            'VIOLIN': [{
                "id": "oe4",
                "text": "Violín",
                "highlights": "avanzado"

            }, {
                "id": "oe5",
                "text": "Violín",
                "highlights": "basico"

            }, {
                "id": "oe6",
                "text": "Violín",
                "highlights": "intermedio"

            }, {
                "id": "oe7",
                "text": "Violoncello",
                "highlights": "avanzado"

            }, {
                "id": "oe8",
                "text": "Violoncello",
                "highlights": "basico"

            }, {
                "id": "oe9",
                "text": "Violoncello",
                "highlights": "intermedio"

            }]
        };


        multiple.resultCache = resultCache;
    */

});
