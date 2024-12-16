<template>
  <footer class="bg-gray-900 text-gray-300 py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- About Section -->
        <div>
          <h3 class="text-xl font-semibold mb-4 text-white">About Me</h3>
          <p class="text-gray-400">
            モダン技術を駆使し、美しさと使いやすさを追求したWebサイトの制作を行っています。
          </p>
        </div>

        <!-- Contact Section -->
        <div>
          <h3 class="text-xl font-semibold mb-4 text-white">Contact</h3>
          <ul class="space-y-2">
            <li>
              <a 
                href="/contact/" 
                class="text-gray-400 hover:text-white transition-colors duration-300"
              >
                お問合せフォームよりお問合せください
              </a>
            </li>
          </ul>
        </div>

        <!-- Social Links -->
        <!-- <div>
          <h3 class="text-xl font-semibold mb-4 text-white">Follow Me</h3>
          <div class="flex space-x-4">
            <a 
              href="https://github.com/ogmiq" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <i class="fab fa-github text-2xl"></i>
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin text-2xl"></i>
            </a>
          </div>
        </div> -->
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-800 mt-8 pt-8 text-center">
        <p class="text-gray-400">
          &copy; {{ new Date().getFullYear() }} Ami's portfolio. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Component logic here if needed
</script>
