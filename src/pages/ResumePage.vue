<template>
  <q-page class="resume-container">
    <section class="resume row">
      <header class="title grid">
        <section class="grid-item column" style="justify-content: center;">
          <img src="../assets/profile.jpg" style="width: 100%; aspect-ratio: 1 / 1;" />
        </section>
        <section class="grid-item">
          <h1>James Caldon</h1>
          <h2 style="color: dimgrey;">Software Engineer & Data Scientist</h2>
          <p>Full Stack Software Developer specialising in .NET C# with ~2 years of commercial software development experience,
            supported by ~5 years of commercial experience in IT and 4 years of study, focused on algorithms, software architecture, cloud computing (AWS, Docker),
            of which are the foundation for many personal hobby projects over the past decade. Capable of producing clean, efficient, and readable code in a variety of languages not limited to:
          <ul>
            <li>
              high-level languages/frameworks such as .NET C#, ASP.NET, SQL, HTML/JavaScript/Typescript/CSS, React JS, Vue JS and Electron.
            </li>
            <li>
              low-level system languages such as C, C++ and experience with the windows API (win32) and NodeJS native addons.
            </li>
          </ul>
          </p>
          <p>Significant machine learning experience (TensorFlow, Keras; PyTorch) specialising in convolutional neural
            networks resulting in a First-Class Honours dissertation mark of > 80.</p>
        </section>
      </header>
      <section class="main grid">
        <section class="grid-item">
          <h3>Contact</h3>
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
          <h3>Languages and Libraries</h3>
          <section class="skills">
            <p>.NET C#</p><meter value="0.95"></meter>
            <p>ASP.NET C#</p><meter value="0.95"></meter>
            <p>Javascript/Typescript</p><meter value="0.95"></meter>
            <p>T-SQL</p><meter value="0.9"></meter>
            <p>Python</p><meter value="0.9"></meter>
            <p>Vue JS</p><meter value="0.8"></meter>
            <p>React</p><meter value="0.7"></meter>
            <p>Electron</p><meter value="0.75"></meter>
            <p>NodeJS</p><meter value="0.6"></meter>
            <p>NodeJS Native Addons</p><meter value="0.8"></meter>
            <p>MongoDB</p><meter value="0.5"></meter>
            <p>C</p><meter value="0.5"></meter>
            <p>C++</p><meter value="0.6"></meter>
            <p>WinAPI</p><meter value="0.55"></meter>
          </section>
        </section>
        <section class="grid-item">
          <h3>Education</h3>
          <div class="education row">
            <div>
              <b>BSc in Computer Science (Honours) WAM > 80</b>
              <div>University of Western Australia</div>
              <div class="date">2017 - 2021</div>
            </div>
            <div>
              <b>WACE as School Dux of Computer Science</b>
              <div>Wesley College</div>
              <div class="date">2016</div>
            </div>
          </div>
          <h3>Experience</h3>
          <div style="background-color: #d3d3d3; padding: 1em">
            <div class="date">2022 - Current</div>
            <div><i>Ascora</i></div>
            <b>Full Stack Developer</b>
            <p>Employed expertise in C#, ASP.NET, Razor, JavaScript, KendoUI, JQuery, ORMs and SQL to architect, scope, and implement new features, and integrate performance and bugfixes to existing feature sets;</p>
            <ul>
              <li>
                Designed, scoped and implemented a feature rich Case (Ticket) Management System which integrates with multiple distinct third-party APIs, including Zoom, Microsoft Exchange, Graph, POP, SMTP, IMAP.
              </li>
              <li>
                Completely reworked from the ground up an existing implementation of a product and service-based shop for our SAAS customers, which integrated with email notifications, AHA cards and third-party secure credit card processing.
              </li>
              <li>
                Developed from conception to delivery a Global Search and Saved Searches feature which allowed for easy access to all relevant entities (Jobs, Quotes, Enquiries, Invoices etc.) in the SAAS product.
                Global Search sub-features include hotkey support and virtual scrolling supported by performant queries and indexes.
                Saved Searches was designed with a page agnostic implementation, which could be added to any page with any search filters, grid sorts, toggleable visibility grid columns, via the use of adapters.
              </li>
              <li>
                Architected and implemented a financially robust in-depth nested Progress Claim (Partial Invoicing) for Jobs, which cleanly supported various different financial requirements, including standard, sliding-scale, and banded sliding-scale retentions, plus variations and specific tax considerations.
              </li>
            </ul>
            Performance/maintainability enhancements include:
            <ul>
              <li>
                Decreased Invoice generation time from ~30+ seconds to &lt;1 second via many technical optimizations.
              </li>
              <li>
                Optimized an internal shop order page by identifying and refactoring queries which suffered from N+1 issues and missing indices, resulting in loading times decreasing from 30 minutes to a few seconds.
              </li>
            </ul>
          </div>
          <div>
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
              to out of external support legacy applications were created. Developed software to extend to
              functionality of SCCM with the use of various technologies.</p>
          </div>
          <div>
            <div class="date">2014</div>
            <div><i>Thales</i></div>
            <b>Software Tester and Presenter</b>
            <p>Prepared and delivered presentations, debugged software and took part in collaborative work.</p>
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
  scale.value = width >= 794 ? 1 : width / (50 * fontSize);
}

onMounted(() => { window.addEventListener('resize', onResize) })
onUnmounted(() => { window.removeEventListener('resize', onResize) })
onResize();
</script>
<style scoped lang="scss">
.resume-container {
  display: flex;
  transform: scale(v-bind(scale));
  transform-origin: left top;
  font-size: xx-small;
}

:deep(.resume-container) {
  font-size: xx-small;
}

.resume {
  margin-left: auto;
  margin-right: auto;
  flex-grow: 0;
  flex-shrink: 0;
  padding: 3em;
  background: whitesmoke;
  gap: 3em;
  overflow: hidden;
  width: 794px;
  height: 1123px;

  h1,
  h2,
  h3 {
    line-height: 0em;
  }

  h1 {
    font-size: 3em;
  }

  h2,
  h3 {
    font-size: 2em;
  }

  p {
    margin-bottom: 0.5em;
  }

  .date,
  i {
    color: grey;
  }


  .grid {
    display: grid;
    grid-template-columns: 35% auto;
    border-top: 4px solid grey;
    border-bottom: 4px solid grey;
    padding: 1em 0;

    .grid-item {
      padding: 0 2em;

      .education {
        gap: 1em;
      }
    }

    .grid-item:nth-child(2) {
      border-left: 4px solid grey;
      padding: 0 calc(2em + 4px);
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
