<template>
<div class="card bg-base-100 shadow-sm border border-base-300 md:w-full lg:w-4xl xl:w-4xl">
  <div class="card-body">
    <div class="flex items-center gap-2">
      <svg class="size-9" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3.5 18c0-1.414 0-2.121.44-2.56C4.378 15 5.085 15 6.5 15H7c.943 0 1.414 0 1.707.293S9 16.057 9 17v5H3.5zM15 19c0-.943 0-1.414.293-1.707S16.057 17 17 17h.5c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v2H15zM2 22h20M9 16c0-1.414 0-2.121.44-2.56C9.878 13 10.585 13 12 13s2.121 0 2.56.44c.44.439.44 1.146.44 2.56v6H9zm3.691-13.422l.704 1.42a.87.87 0 0 0 .568.423l1.276.213c.816.137 1.008.734.42 1.323l-.992 1a.88.88 0 0 0-.208.73l.284 1.238c.224.98-.292 1.359-1.152.847l-1.196-.714a.86.86 0 0 0-.792 0l-1.196.714c-.856.512-1.376.129-1.152-.847l.284-1.238a.88.88 0 0 0-.208-.73l-.991-1c-.584-.589-.396-1.186.42-1.323l1.275-.213a.87.87 0 0 0 .564-.424l.704-1.42c.384-.77 1.008-.77 1.388 0" color="currentColor"/></svg>
      <h2 class="text-xl font-semibold">Top Patrons</h2>
    </div>
    <div class="overflow-x-auto">
      <table class="table table-zebra w-full">
        <thead>
          <tr class="text-sm text-base-content/60">
            <th class="w-8">#</th>
            <th>Name</th>
            <th>Total Borrowed</th>
            <th>Last Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-2"><img src="/src/assets/image/ranking/gold.png" alt="Rank 1" class="w-full h-full"></td>
            <td class="font-medium">asd</td>
            <td class="text-green-600 font-semibold">123123</td>
            <td class="text-sm text-base-content/60">2023-01-01</td>
          </tr>
          <tr>
            <td class="p-2"><img src="/src/assets/image/ranking/silver.png" alt="Rank 2" class="w-full h-full"></td>
            <td class="font-medium">asd</td>
            <td class="text-green-600 font-semibold">123123</td>
            <td class="text-sm text-base-content/60">2023-01-01</td>
          </tr>
          <tr>
            <td class="p-2"><img src="/src/assets/image/ranking/bronze.png" alt="Rank 3" class="h-full w-full"></td>
            <td class="font-medium">asd</td>
            <td class="text-green-600 font-semibold">123123</td>
            <td class="text-sm text-base-content/60">2023-01-01</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>