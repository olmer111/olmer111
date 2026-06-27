export interface SubtitleSegment {
  startSecond: number;
  endSecond: number;
  text: string;
  animationStyle?: 'fade' | 'slide-up' | 'typewriter' | 'scale-pop';
}

export const SUBTITLE_TIMELINE: SubtitleSegment[] = [
  // APERTURA EXPLOSIVA (00:00 – 00:49)
  { startSecond: 0, endSecond: 4, text: 'Hace exactamente 150 años dormías de una manera completamente diferente.', animationStyle: 'fade' },
  { startSecond: 4, endSecond: 7, text: 'No era una enfermedad. No era insomnio. Era el estado más natural que el ser humano ha conocido en toda su historia.', animationStyle: 'fade' },
  { startSecond: 7, endSecond: 11, text: '¿Por qué lo perdimos? Y más importante… ¿puedes recuperarlo esta misma noche?', animationStyle: 'fade' },
  { startSecond: 11, endSecond: 16, text: 'Cada noche, cuando apagas la luz, repites un ritual inventado hace apenas 150 años.', animationStyle: 'fade' },
  { startSecond: 16, endSecond: 20, text: 'Los humanos dormían de forma radicalmente distinta. Y los resultados eran asombrosos.', animationStyle: 'fade' },
  { startSecond: 20, endSecond: 25, text: 'Un historiador encontró algo en los archivos medievales que cambió todo lo que creíamos saber sobre el sueño humano.', animationStyle: 'fade' },
  { startSecond: 25, endSecond: 29, text: 'El 99.9% de la historia de la humanidad transcurrió sin electricidad. Sin una sola bombilla.', animationStyle: 'fade' },
  { startSecond: 29, endSecond: 35, text: 'Sin pantallas. Sin esa luz azul que ahora te mantiene despierto cada noche. ¿Qué dormían entonces?', animationStyle: 'fade' },
  { startSecond: 35, endSecond: 38, text: 'Nuestros ancestros tenían algo mucho más poderoso que cualquier bombilla.', animationStyle: 'fade' },
  { startSecond: 38, endSecond: 44, text: 'Lo que ese algo hizo a sus cerebros durante 300,000 años está cambiando la ciencia del sueño para siempre.', animationStyle: 'fade' },
  { startSecond: 44, endSecond: 49, text: 'Lo que vas a descubrir en los próximos 8 minutos va a cambiar cómo duermes esta noche.', animationStyle: 'fade' },

  // SECCIÓN 1 — EL FUEGO (00:54 – 02:19)
  { startSecond: 54, endSecond: 60, text: 'Retrocede 300,000 años. Antes del lenguaje. Antes de las ciudades. Antes de todo.', animationStyle: 'fade' },
  { startSecond: 60, endSecond: 66, text: '¿Qué es lo primero que hace un grupo humano cuando cae la noche en la sabana africana?', animationStyle: 'fade' },
  { startSecond: 66, endSecond: 71, text: 'Enciende fuego. Para sobrevivir a la oscuridad.', animationStyle: 'fade' },
  { startSecond: 71, endSecond: 77, text: 'En la oscuridad, los depredadores tenían ventaja absoluta. El fuego era la única barrera entre vivir y morir.', animationStyle: 'fade' },
  { startSecond: 77, endSecond: 82, text: 'Los leones no atacaban si había llamas. El círculo de luz era el círculo de la vida.', animationStyle: 'fade' },
  { startSecond: 82, endSecond: 87, text: 'El fuego hizo algo que nadie esperaba. Algo que nos hizo completamente humanos.', animationStyle: 'fade' },
  { startSecond: 87, endSecond: 92, text: 'Extendió las horas sociales. Creó tiempo que antes no existía.', animationStyle: 'fade' },
  { startSecond: 92, endSecond: 98, text: 'Alrededor del fuego, nació algo que nos separó de todas las demás especies: las historias.', animationStyle: 'fade' },
  { startSecond: 98, endSecond: 106, text: 'Una antropóloga llamada Polly Wiessner pasó 40 años demostrando esto. Los datos eran imposibles de ignorar.', animationStyle: 'fade' },
  { startSecond: 106, endSecond: 112, text: 'De noche, alrededor del fuego, el 81% de las conversaciones eran historias.', animationStyle: 'fade' },
  { startSecond: 112, endSecond: 119, text: 'El fuego no solo los mantenía vivos. Los estaba haciendo más inteligentes, más empáticos.', animationStyle: 'fade' },
  { startSecond: 119, endSecond: 125, text: 'Ese fuego también hacía algo a sus cerebros mientras dormían junto a él.', animationStyle: 'fade' },
  { startSecond: 125, endSecond: 135, text: 'Algo que nosotros hemos perdido completamente. Está directamente relacionado con el problema de sueño más común del mundo.', animationStyle: 'fade' },

  // SECCIÓN 2 — EL DESCUBRIMIENTO (02:24 – 03:06)
  { startSecond: 144, endSecond: 150, text: 'Imagina despertar a las 2 de la mañana. Sin alarma. Completamente despejado.', animationStyle: 'fade' },
  { startSecond: 150, endSecond: 156, text: 'La mayoría de la gente entra en pánico. Piensa que algo va mal.', animationStyle: 'fade' },
  { startSecond: 156, endSecond: 162, text: 'Pero los investigadores descubrieron algo que te va a dejar sin palabras: eso es exactamente lo que debería pasar.', animationStyle: 'fade' },
  { startSecond: 162, endSecond: 168, text: 'No es insomnio. Es un estado que tiene nombre desde hace siglos: "la guardia".', animationStyle: 'fade' },
  { startSecond: 168, endSecond: 174, text: 'Si lo estás viviendo ahora, tu cuerpo está funcionando perfectamente.', animationStyle: 'fade' },
  { startSecond: 174, endSecond: 182, text: 'Roger Ekirch pasó 16 años rastreando este patrón. Encontró más de 500 referencias en manuscritos medievales.', animationStyle: 'fade' },
  { startSecond: 182, endSecond: 186, text: 'Desde la Edad Media hasta el siglo XIX, todos los humanos dormían en dos bloques separados.', animationStyle: 'fade' },

  // SECCIÓN 3 — EL SUEÑO BIFÁSICO (03:06 – 05:22)
  { startSecond: 186, endSecond: 192, text: 'Primer sueño: de 4 a 5 horas. Una pausa de vigilia. Segundo sueño. Eso era lo normal.', animationStyle: 'fade' },
  { startSecond: 192, endSecond: 198, text: 'Era el ritmo natural del cerebro humano sin interferencia de la luz artificial.', animationStyle: 'fade' },
  { startSecond: 198, endSecond: 204, text: 'Lo más fascinante es lo que hacían durante esa pausa nocturna.', animationStyle: 'fade' },
  { startSecond: 204, endSecond: 210, text: 'Se levantaban. Oraban. Hablaban con sus vecinos. Hacían el amor. Interpretaban sus sueños.', animationStyle: 'fade' },
  { startSecond: 210, endSecond: 216, text: 'Los médicos medievales recomendaban ese momento específicamente para la concepción de hijos.', animationStyle: 'fade' },
  { startSecond: 216, endSecond: 222, text: 'El cerebro en ese estado intermedio es diferente. Más creativo. Más conectado con las emociones.', animationStyle: 'fade' },
  { startSecond: 222, endSecond: 228, text: 'Pero hay algo que te dejará completamente sin palabras. Un científico decidió recrear esas condiciones exactas.', animationStyle: 'fade' },
  { startSecond: 228, endSecond: 234, text: 'En 1992, Thomas Wehr reclutó voluntarios para un experimento radical y polémico.', animationStyle: 'fade' },
  { startSecond: 234, endSecond: 240, text: 'Los sumergió en 14 horas de oscuridad total cada día durante cuatro semanas completas.', animationStyle: 'fade' },
  { startSecond: 240, endSecond: 246, text: 'En las primeras semanas, dormían caóticamente. Desorientados por una vida entera de luz artificial.', animationStyle: 'fade' },
  { startSecond: 246, endSecond: 252, text: 'Pero en la cuarta semana, algo extraordinario ocurrió.', animationStyle: 'fade' },
  { startSecond: 252, endSecond: 258, text: 'Todos empezaron a dormir en dos bloques. De forma espontánea. Natural. Como si lo recordaran.', animationStyle: 'fade' },
  { startSecond: 258, endSecond: 264, text: 'El patrón emergió solo: 4 horas de sueño, pausa, 4 horas más.', animationStyle: 'fade' },
  { startSecond: 264, endSecond: 270, text: 'Sus niveles de una hormona específica se dispararon a niveles nunca antes registrados.', animationStyle: 'fade' },
  { startSecond: 270, endSecond: 276, text: 'Prolactina. La hormona de la paz absoluta. El antídoto natural a la ansiedad.', animationStyle: 'fade' },
  { startSecond: 276, endSecond: 282, text: '5 veces superiores a los normales. El cuerpo se inundaba de calma.', animationStyle: 'fade' },
  { startSecond: 282, endSecond: 288, text: 'Como una meditación profunda que llegaba sola. Sin entrenamiento.', animationStyle: 'fade' },
  { startSecond: 288, endSecond: 294, text: 'Una conciencia alterada que la mayoría de humanos modernos nunca experimentan.', animationStyle: 'fade' },
  { startSecond: 294, endSecond: 300, text: 'Y hay una razón muy específica.', animationStyle: 'fade' },
  { startSecond: 300, endSecond: 306, text: 'Esa razón tiene nombre. Tiene fecha de nacimiento exacta. Destruyó en décadas lo que la evolución construyó en milenios.', animationStyle: 'fade' },
  { startSecond: 306, endSecond: 312, text: 'Este estado intermedio no era solo placentero. Era funcionalmente necesario para la salud mental humana.', animationStyle: 'fade' },
  { startSecond: 312, endSecond: 318, text: 'El cerebro procesaba los traumas del día. Sin terapia. Sin medicación. Solo oscuridad y tiempo.', animationStyle: 'fade' },
  { startSecond: 318, endSecond: 324, text: 'La depresión. La ansiedad crónica. Podrían estar relacionadas con la pérdida de este estado.', animationStyle: 'fade' },
  { startSecond: 324, endSecond: 330, text: 'Podrías estar tomando medicación para tratar un síntoma de algo que tiene una causa raíz diferente.', animationStyle: 'fade' },
  { startSecond: 330, endSecond: 336, text: 'La historia que viene ahora es donde todo se vuelve verdaderamente oscuro.', animationStyle: 'fade' },
  { startSecond: 336, endSecond: 342, text: 'Alguien tomó una decisión hace 400 años que nos arrebató este estado de conciencia.', animationStyle: 'fade' },
  { startSecond: 342, endSecond: 348, text: 'No fue un rey. No fue un médico. Fue algo que tienes en tu habitación ahora mismo.', animationStyle: 'fade' },
  { startSecond: 348, endSecond: 354, text: 'Fue la luz artificial. Y el hombre que la perfeccionó no tenía ni idea del coste real.', animationStyle: 'fade' },

  // SECCIÓN 4 — LA HISTORIA DE LA LUZ ARTIFICIAL (05:25 – 07:27)
  { startSecond: 365, endSecond: 371, text: 'París, 1667. Luis XIV ordena iluminar las calles con 2,736 lámparas de aceite.', animationStyle: 'fade' },
  { startSecond: 371, endSecond: 377, text: 'Nace la primera ciudad con noche eterna.', animationStyle: 'fade' },
  { startSecond: 377, endSecond: 383, text: 'La noche empezó a encoger. Primero en las calles. Luego en las tiendas. Luego en los hogares.', animationStyle: 'fade' },
  { startSecond: 383, endSecond: 389, text: 'La oscuridad era sagrada. Obligatoria. Protegida por ordenanzas reales.', animationStyle: 'fade' },
  { startSecond: 389, endSecond: 395, text: 'Luego llegaron las velas de sebo. Después las de cera. Cada invento robando más minutos de oscuridad.', animationStyle: 'fade' },
  { startSecond: 395, endSecond: 401, text: 'Londres victoriano brillaba con gas. Las fábricas nunca paraban. El turno de noche nació.', animationStyle: 'fade' },
  { startSecond: 401, endSecond: 407, text: 'La primera epidemia documentada de insomnio en la historia de la medicina.', animationStyle: 'fade' },
  { startSecond: 407, endSecond: 413, text: 'Un inventor obsesivo en Nueva Jersey estaba a punto de cambiar la humanidad para siempre.', animationStyle: 'fade' },
  { startSecond: 413, endSecond: 419, text: '21 de octubre de 1879. Thomas Edison enciende una bombilla por primera vez. 40 horas de luz continua.', animationStyle: 'fade' },
  { startSecond: 419, endSecond: 425, text: 'En 20 años, la electricidad llegó a las ciudades. En 50, a los hogares más remotos.', animationStyle: 'fade' },
  { startSecond: 425, endSecond: 431, text: 'El primer sueño desapareció. Para siempre. Sin que nadie lo notara.', animationStyle: 'fade' },
  { startSecond: 431, endSecond: 437, text: 'Tu cerebro no recibió esa actualización. Sigue intentando seguir ese patrón grabado en 300,000 años de evolución.', animationStyle: 'fade' },
  { startSecond: 437, endSecond: 443, text: 'Cuando no puede, la luz se lo impide, lo interpreta como una emergencia.', animationStyle: 'fade' },
  { startSecond: 443, endSecond: 449, text: 'Genera ansiedad. Cortisol. Pensamientos en espiral a las 3 de la mañana.', animationStyle: 'fade' },
  { startSecond: 449, endSecond: 455, text: 'Es tu biología milenaria luchando contra 150 años de historia artificial.', animationStyle: 'fade' },

  // SECCIÓN 5 — LAS PANTALLAS Y LA SOLUCIÓN (06:34 – 07:58)
  { startSecond: 514, endSecond: 520, text: 'Ahora las pantallas. Lo que Edison hizo con la luz, los smartphones lo están haciendo al doble de velocidad.', animationStyle: 'fade' },
  { startSecond: 520, endSecond: 526, text: 'La luz azul de tu pantalla le envía una señal directa a tu cerebro: "Son las 2 del mediodía."', animationStyle: 'fade' },
  { startSecond: 526, endSecond: 532, text: 'Bloquea la melatonina durante hasta 3 horas después de dejarla de mirar.', animationStyle: 'fade' },
  { startSecond: 532, endSecond: 538, text: 'Tu ritmo circadiano, afinado durante millones de años, destruido en 10 minutos de redes sociales.', animationStyle: 'fade' },
  { startSecond: 538, endSecond: 544, text: 'Pero hay una prueba científica que demuestra que el problema no está en ti.', animationStyle: 'fade' },
  { startSecond: 544, endSecond: 550, text: 'Un estudio llevó a voluntarios a acampar durante una semana. Sin teléfonos. Sin luz artificial.', animationStyle: 'fade' },
  { startSecond: 550, endSecond: 556, text: 'Sus ritmos circadianos se reajustaron completamente. Como si nunca hubieran existido las pantallas.', animationStyle: 'fade' },
  { startSecond: 556, endSecond: 562, text: 'Empezaron a tener sueño al ponerse el sol. Se despertaban con el amanecer, descansados.', animationStyle: 'fade' },
  { startSecond: 562, endSecond: 568, text: 'Sin alarma. Sin pastillas. Sin suplementos caros. Solo oscuridad natural.', animationStyle: 'fade' },
  { startSecond: 568, endSecond: 574, text: 'Hay algo que puedes hacer esta noche que cambiará tu sueño para siempre.', animationStyle: 'fade' },
  { startSecond: 574, endSecond: 580, text: 'No necesitas suplementos. No necesitas apps de meditación.', animationStyle: 'fade' },

  // SECCIÓN 6 — QUÉ HACER ESTA NOCHE (07:31 – 08:04)
  { startSecond: 581, endSecond: 587, text: 'Necesitas oscuridad. Real. Total. Sin pequeños LED de aparatos.', animationStyle: 'fade' },
  { startSecond: 587, endSecond: 593, text: 'Si te despiertas entre las 2 y las 4 de la mañana, no entres en pánico.', animationStyle: 'fade' },
  { startSecond: 593, endSecond: 599, text: 'No enciendas la luz. No agarres el teléfono. Eso que sientes en la oscuridad es la solución.', animationStyle: 'fade' },
  { startSecond: 599, endSecond: 605, text: 'Esa calma vigilante. Esa mente clara en la oscuridad absoluta. Eso es lo que la humanidad perdió.', animationStyle: 'fade' },
  { startSecond: 605, endSecond: 611, text: 'Tu cerebro está procesando. Haciendo exactamente lo que está diseñado para hacer. Déjalo.', animationStyle: 'fade' },
  { startSecond: 611, endSecond: 617, text: 'Si puedes quedarte en esa oscuridad consciente, sin ansiedad, sin prisa...', animationStyle: 'fade' },
  { startSecond: 617, endSecond: 623, text: 'Estás experimentando algo que ningún humano moderno experimenta. Algo que los medievales consideraban un regalo.', animationStyle: 'fade' },

  // CONCLUSIÓN (08:04 – 08:37)
  { startSecond: 624, endSecond: 630, text: 'El insomnio que describes podría ser tu cerebro intentando recuperar lo que la modernidad nos arrebató.', animationStyle: 'fade' },
  { startSecond: 630, endSecond: 636, text: 'Roger Ekirch lo llama "la vigilia olvidada". Un estado de conciencia que desapareció sin nombre.', animationStyle: 'fade' },
  { startSecond: 636, endSecond: 642, text: 'Millones están siendo medicadas por algo que es absolutamente normal y necesario.', animationStyle: 'fade' },
  { startSecond: 642, endSecond: 648, text: '¿Y si la solución no estuviera en una pastilla? ¿Y si estuviera en apagar esa última luz?', animationStyle: 'fade' },
  { startSecond: 648, endSecond: 654, text: 'Esta noche, cuando te despiertes a las 3 de la mañana y tu mente esté perfectamente clara...', animationStyle: 'fade' },
  { startSecond: 654, endSecond: 660, text: 'No estás roto. No estás enfermo. Estás despertando a algo que tus ancestros conocían cada noche.', animationStyle: 'fade' },
  { startSecond: 660, endSecond: 667, text: 'Estás en "la guardia". El estado de conciencia más antiguo de la humanidad.', animationStyle: 'fade' },
  { startSecond: 667, endSecond: 677, text: 'Bienvenido a casa.', animationStyle: 'fade' },
];
