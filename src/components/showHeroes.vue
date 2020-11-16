<template>
    <div>
        <div class="container">
            <div class="content">
                <h2 class="head2">Heroes view</h2>
            </div>
            <div class="col-sm-7">
                <div class="card">
                    <div class="card-header">
                       List of heroes
                    </div>
                    <div class="card-body">
                        <!-- lists of hereoes is here. -->
                        <div class="list-group">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item" v-for="hero in heroes" :key="hero.id">
                                    <a class="list-group-item list-group-item-action" @click="selectedHero = hero"
                                    :class="{'is-active': selectedHero === hero }">
                                        <span>{{hero.firstName}}</span>
                                        <!-- check functionality here -->
                                    </a>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-primary">Go somewhere</button>
                    </div>
                </div>
            </div>
            <!-- another card will fall into here.  -->
            <div class="col-sm-7" v-if="selectedHero">
                <div class="card">
                    <div class="card-header">
                        Hero details
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                            <!-- for id -->
                                <label for="id">ID: </label>
                                <input id="id" v-model="selectedHero.id">
                            </div>

                            <div class="form-group">
                                    <!-- for firstname -->
                                <label for="id">first name: </label>
                                <input id="id" v-model="selectedHero.firstName">
                            </div>

                            <div class="form-group">
                                <!-- last name here -->
                                <label for="id">lastName: </label>
                                <input id="id" v-model="selectedHero.lastName">
                            </div>

                            <div class="form-group">
                                    <!-- description here -->
                                    <label for="id">description: </label>
                                    <input id="id" v-model="selectedHero.description">
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
        <button class="btn btn-outline-primary" @click="goBack()"> see the home page </button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            selectedHero: undefined,
            heroes:[
                // this is an array list of individuals
                // data is lifted directly from tutorial page. 
                {
                    id: 10,
                    firstName: 'Ella',
                    lastName: 'Papa',
                    description: 'fashionista',
                },
                {
                    id: 20,
                    firstName: 'Madelyn',
                    lastName: 'Papa',
                    description: 'the cat whisperer',
                },
                {
                    id: 30,
                    firstName: 'Haley',
                    lastName: 'Papa',
                    description: 'pen wielder',
                },
                {
                    id: 40,
                    firstName: 'Landon',
                    lastName: 'Papa',
                    description: 'arc trooper',
                },
            ]
        }
    },
    methods: {
        goBack(){
            this.$router.push({name:'homepage'});
        }
    }
}
</script>

<style scoped>

.head2
{
    text-align:center;
}

.card-header
{
    background-color:greenyellow;
}


</style>