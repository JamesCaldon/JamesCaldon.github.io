<template>
  <q-page class="resume-container">
    <section class="resume column">
      <header class="title grid">
        <section class="grid-item">
          <img src="../assets/profile.jpg" />
        </section>
        <section class="grid-item">
          <h2>James Caldon</h2>
          <h5 style="color: dimgrey">Software Engineer & Data Scientist</h5>
          <p>Graduate programmer with 4 years of study, focused on algorithms, software architecture, cloud computing
            (AWS, Docker), of which are the foundation for many personal hobby projects over the past decade. Capable of
            producing clean, efficient, and readable code in a variety of languages not limited to:
          <ul>
            <li>
              high-level languages/frameworks such as Python, .net C#, Java, SQL, HTML/JavaScript/Typescript/CSS, Vue JS
              (and some React), Electron, NodeJS, and MongoDB.

            </li>
            <li>
              low-level system languages such as C, C++ and experience with the windows API (win32) and NodeJS native
              addons.
            </li>
          </ul>
          </p>
          <p>Significant machine learning experience (TensorFlow, Keras; PyTorch) specialising in convolutional neural
            networks leading to a pending publication in the Monthly Notices of the Royal Astronomical Society (MNRAS)
            and a First-Class Honours dissertation mark of > 80.</p>
        </section>
      </header>
      <section class="main grid col-grow">
        <section class="grid-item">
          <h4>Contact</h4>
          <address class="contact">
            <q-icon name="email" size="2em"></q-icon>
            <span>
              <b> Email </b>
              <p><a href="mailto:james.caldon@outlook.com">james.caldon@outlook.com</a></p>
            </span>
            <q-icon name="hub" size="2em"></q-icon>
            <span>
              <b> Github </b>
              <p><a href="https://github.com/JamesCaldon">https://github.com/JamesCaldon</a></p>
            </span>
            <q-icon name="link" size="2em"></q-icon>
            <span>
              <b> LinkedIn </b>
              <p><a href="https://www.linkedin.com/in/james-caldon/">https://www.linkedin.com/in/james-caldon/</a></p>
            </span>
          </address>
          <h4>Languages and Libraries</h4>
          <section class="skills">
            <p>Python</p><meter value="0.9"></meter>
            <p>.net C#</p><meter value="0.7"></meter>
            <p>Javascript/Typescript</p><meter value="0.95"></meter>
            <p>Vue JS</p><meter value="0.8"></meter>
            <p>React</p><meter value="0.6"></meter>
            <p>Electron</p><meter value="0.75"></meter>
            <p>NodeJS</p><meter value="0.6"></meter>
            <p>NodeJS Native Addons</p><meter value="0.8"></meter>
            <p>MongoDB</p><meter value="0.5"></meter>
            <p>C</p><meter value="0.5"></meter>
            <p>C++</p><meter value="0.7"></meter>
            <p>WinAPI</p><meter value="0.55"></meter>
          </section>
        </section>
        <section class="grid-item">
          <h4>Education</h4>
          <div class="education row">
            <div>
              <b>BSc in Computer Science (Honours) WAM > 80</b>
              <div>University of Western Australia</div>
              <div class="date">2021</div>
            </div>
            <div>
              <b>BSc in Computer Science & Data Science</b>
              <div>University of Western Australia</div>
              <div class="date">2017 - 2019</div>
            </div>
            <div>
              <b>WACE as School Dux of Computer Science</b>
              <div>Wesley College</div>
              <div class="date">2016</div>
            </div>
          </div>
          <h4>Experience</h4>
          <div style="background-color: #d3d3d3; padding: 1em">
            <div class="date">2017 - 2022</div>
            <div><i>Wesley College</i></div>
            <b>ILT Support Officer</b>
            <p>Front desk technician providing technical support to teachers, administration staff and students. This
              involved fixing various IT related issues including software, hardware, infrastructure (office/classroom
              setup i.e., installation involving in and out of wall data cabling, woodworking etc.), and the usual
              end-user issues.</p>
            <p>When not answering tickets via ManageEngine ServiceDesk Plus, duties involved managing the imaging
              system, OS environment and applications and their respective licensing (with SCCM). In house
              solutions/augmentations
              to out of external support legacy applications were created. Developed in house software to extend to
              functionality of SCCM with the use of various technologies.</p>
          </div>
          <div>
            <div class="date">2017 - 2019</div>
            <div><i>Freelance</i></div>
            <b>Private Cello Tutor</b>
            <p>Provided and prepared personalised 1-on-1 tutoring and mentoring for aspiring cello students.</p>
          </div>
          <div>
            <div class="date">2016</div>
            <div><i>Relay for Life</i></div>
            <b>Volunteer</b>
            <p>Information desk duties plus information brochure handouts.</p>
          </div>
          <div>
            <div class="date">2015</div>
            <div><i>Freelance</i></div>
            <b>Private English and Mathematics Tutor</b>
            <p>Taught junior and middle school students in the areas of English and Mathematics by providing a
              structured lesson plan.</p>
          </div>
          <div>
            <div class="date">2014</div>
            <div><i>Software Tester and Presenter</i></div>
            <b>Thales</b>
            <p>Prepared and delivered presentations, debugged software and took part in collaborative work.</p>
          </div>
          <div>
            <div class="date">2014</div>
            <div><i>Riverview Church</i></div>
            <b>Mentor</b>
            <p>Volunteered as a mentor for children in a classroom environment, organised lesson plans and provided
              1-on-1 mentoring.</p>
          </div>
        </section>
      </section>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

let scale = ref(1);
const onResize = (event?: UIEvent) => {
  const fontSizeString = window.getComputedStyle(document.documentElement).getPropertyValue('font-size')
  const fontSize = Number(fontSizeString.substring(0, fontSizeString.length - 2))
  const width = window.innerWidth;
  scale.value = width / (120 * fontSize);
}

onMounted(() => { window.addEventListener("resize", onResize) })
onUnmounted(() => { window.removeEventListener("resize", onResize) })
onResize();
</script>
<style scoped lang="scss">
.resume-container {
  display: flex;
  transform: scale(v-bind(scale));
  transform-origin: left top;
}

.resume {
  margin-left: auto;
  margin-right: auto;
  flex-grow: 0;
  flex-shrink: 0;
  padding: 3em;
  aspect-ratio: 0.7071;
  background: whitesmoke;
  gap: 3em;
  overflow: hidden;

  width: 134em; //TODO magic number eww


  h1,
  h2,
  h3,
  h4,
  h5 {
    line-height: 0em;
  }

  .date,
  i {
    color: grey;
  }


  .grid {
    display: grid;
    grid-template-columns: 35% auto;
    gap: 3em;
    border-top: 4px solid grey;
    border-bottom: 4px solid grey;
    padding: 3em 0;

    .grid-item {
      padding: 0 2em;

      .education {
        gap: 1em;
      }
    }

    .grid-item:nth-child(2) {
      border-left: 4px solid grey;
    }
  }
}

.skills {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;

  meter {
    width: 13em;
  }
}

.resume>* {
  position: relative;
}
</style>
