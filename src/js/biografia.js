import { Timeline } from '@knight-lab/timelinejs';



let opcionesTimeline = {

  language: 'es',
  default_bg_color: { r: 17, g: 17, b: 17 },

}


const generarTimeline = () => {
    if (document.querySelector("#timeline-embed") != null) {
      timeline = new Timeline('timeline-embed', 'https://docs.google.com/spreadsheets/d/1vEBkcKDPjtCtri0WLjvWcgUuTgCQ8BI_tztBWVBa638/edit?gid=0#gid=0', opcionesTimeline);
    }
  }


generarTimeline();