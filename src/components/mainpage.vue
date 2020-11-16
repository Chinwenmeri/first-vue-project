<template>
<!-- work on navbar items as pointer to an external page.  -->
  <div class="mainpage">
          <div class="col-xl-12">
            <!-- the navbar is here  -->
            <nav class="navbar 000navbar-light"  style="background-color: #e3f2fd;">
              <a class="navbar-brand" href="#">Heros</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-item nav-link active" href="#">{{hero.firstName}}<span class="sr-only">(current)</span></a>
                  <a class="nav-item nav-link" href="#">{{hero.lastName}}</a>
                  <a class="nav-item nav-link" href="#">{{hero.power}}</a>
                </div>
              </div>
            </nav>
          </div>
    <!-- the body begins here -->
    <!-- <p> {{hero.firstName}}'s page</p> -->
    <header class="card-header">
      <p class="card-header-title">{{ hero.firstName }}</p>
    </header>
    <div class="container">
      <div class="content">
        <div class="row">
          <div class="col-md-12">
            <div class="mynavabar">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-10">
            <form>
              <div class="form-group">
                <label class="label" for="firstName">first name: </label>
                <!-- TODO: add design in style for the general formatting -->
                <input class="form-control" id="firstName" v-model="hero.firstName" />
            </div>
            <div class="form-group">
              <!-- TODO: ADD CSS IN STYLE TAG -->
              <label class="label" for="lastName">last name: </label>
              <input class="form-control" id="lastName" v-model="hero.lastName" />
            </div>
            <div class="form-group">
              <label class="label" for="description">description: </label>
                <textarea class="form-control" id="description" type="text" v-model="hero.description" rows="5" />
            </div>
            <div class="field">
                <label class="label" >cape color: </label>
                <label class="radio" for="color-red">
                  <input type="radio" id="color-red" value="red" v-model="hero.capeColor"/>
                  red
                </label>
                <label class="radio" for="color-blue">
                  <input  type="radio" id="color-blue" value="blue" v-model="hero.capeColor"/>
                  blue
                </label>
                <label class="radio" for="color-green">
                  <input type="radio" id="color-green"  value="green" v-model="hero.capeColor"/>
                  green
                </label>
                <!-- <div class="color-line" :style="{'background-color': hero.capeColor}"></div> -->
                <div class="progress">
                  <div class="progress-bar" :style="{'background-color': hero.capeColor}" aria-valuenow="25" aria-valuemin="0"></div>
                </div>
              </div>
               <div class="form-group" style=" min-width: 20px">
                <label for="power">
                  super power: 
                    <select class="myform-control form-control-lg" id="power" v-model="hero.power" :class="{ invalid: !hero.power }" @keyup.esc="clearPower" placeholder="Please select one">
                      <option disabled value>Please select one</option>
                      <option>Speed</option>
                      <option>Flight</option>
                      <option>Strength</option>
                      <option>Invisibility</option>
                    </select>
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="active" v-model="hero.active"/>
                <label class="checkbox" for="active">
                  active
                </label>
              </div>
            </form>
            <hr>
            <footer class="card-footer">
              <button type="button" class="btn btn-outline-secondary" style="padding-right:20px !important" @click="cancelHero()">
                <i class="fas fa-undo"></i>
                <span>Cancel</span>
              </button>
              <button type="button" class="btn btn-outline-primary" style="padding-right:20px !important" @click="saveHero()"
              data-toggle="collapse" data-target="#herodata" aria-expanded="false" aria-controls="collapseExample">
                <span>Save</span>
              </button>
              <button type="button" class="btn btn-outline-success" style="padding-right:20px !important" @click="nextPage()">
                <span>View</span>
              </button>
              <div>
              </div>
          </footer>
          <!-- try changing to a collapse -->
          <div class="collapse" id="herodata">
              <div class="card card-body">
                <pre>{{ message }}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Heroes',
  data(){
    return{
      hero:{
        id: 1,
        firstName: ' ',
        lastName: ' ',
        description: ' ',
        capeColor: ' ',
        power: ' ',
        active: true,
      },
      message: ''
    };
  },

  methods: {
    cancelHero(){
      this.message = '';
    },
    clearPower(){
      this.hero.power = '';
    },
    saveHero(){
      this.message = JSON.stringify(this.hero, null, '\n');
    },
    nextPage(){
      this.$router.push({name:'viewheroes'});
    },
  }
};
</script>

<style scoped>
.form-control{
  min-width: 60px;
}
p{
  text-align: center;
    color:rgb(221, 181, 181);
    font-weight:bold;
    
}
.container{
    background-color: rgba(233, 193, 231, 0.116);
    width: 1000px;
    min-height: 500px;
    padding-top:60px;
    border-radius: 20px;
    color:rgba(39, 32, 32, 0.527);
    padding-bottom:30px;
}
button{
  width:110px;
}

.card-header{
  align-items: center;
  background-color: black;
  
}
</style>