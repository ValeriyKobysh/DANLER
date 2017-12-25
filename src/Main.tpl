<section class="section-content container">
  <div class="section-content__container">
    <section class="section section_full section-delivery">
      <h1 class="section__heading section__heading_center">{$page.header}</h1>
      <div class="text-block">
        {$page.text}
        {if $smarty.get.p1=="/delivery/"}
        <h1 class="section__heading section__heading_center">{$page_two.header}</h1>
        {$page_two.text}
        {/if}
      </div>
    </section>
  </div>
</section>
