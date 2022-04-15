<template>
  <div class="container">
    <div class="row justify-content-center text-center">
      <div class="col-8">
        <div class="d-flex flex-column justify-content-center error-display">
          <h1 class="mb-3">Uh-Oh!</h1>

          <p>
            It looks like you're experiencing some network issues, please take a
            breath and <a href="#" @click="$router.go(-1)">Click here</a> to try
            again.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
