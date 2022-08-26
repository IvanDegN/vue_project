<template>
    <div>
      <div>
        <div class="card" >
          <div class="card-body">
            <div class="d-flex flex-column align-items-center text-center">
              <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150">
              <div class="mt-3">
                <h4 >Name: {{profile.name}}</h4>
                <p class="text-secondary mb-1" >Email: {{profile.email}}</p>
                <p class="text-muted font-size-sm">Phone: {{profile.phone}}</p>
                <p class="text-muted font-size-sm">Web site: {{profile.website}}</p>
              </div>
            </div>
          </div>
        </div>
    </div>
      </div>
</template>

<script>
export default {
  name: "UserProfileItem",
  props:['profile'],
}
</script>

<style scoped>

</style>