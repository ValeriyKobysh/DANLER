<div class="container">
<pre>{$catalog[0]}</pre>
<section class="search-navigation">
  <div class="catalog-heading">Каталог</div>
  <form class="search-form" action="{if $smarty.get.cat_search=="articles"}/articles/{else}/search/{/if}" method="get" >
    <input type="hidden" name="cat_search" value="" id="cat_search">
    <div class="dropp">
      <div class="dropp-header">
        <span class="dropp-header-title js-value">{if $smarty.get.cat_search==""}Направление поиска{elseif $smarty.get.cat_search=='model'}Поиск по моделям{else}Поиск по статьям{/if}</span>
        <a class="dropp-header-btn js-dropp-action" href="#"><i class="icon-down-open-big"></i></a>
      </div>

      <div class="dropp-body all-body">
        <label for="models_search">По моделям
          <input type="radio" id="models_search"  value="Поиск по моделям"/>
        </label>
        <label for="articles_search">По статьям
          <input type="radio" id="articles_search" value="Поиск по статьям"/>
        </label>
      </div>
      <div class="dropp-body model_body">
        {foreach from=$models item=model}
        <label for="model_{$model.id}">{$model.name}
          <input type="radio" id="model_{$model.id}" name="model" value="{$model.name}" {if isset($key_model) && $key_model==$model.name}checked="checked"{/if}/>
        </label>
        {/foreach}
      </div>
      <div class="dropp-body article-body">

      </div>
    </div>
    <div class="search-panel">
      <input class="search-input" type="text" name="key"  {if isset($key)} value="{$key}" {/if} placeholder="Введите название"/>
      <button class="submit" type="submit"><span class="icon-search"></span></button>
    </div>
  </form>
  <script>
  $(document).on('click','#articles_search',function(){
    $('.search-form').attr('action','/articles/');
    var val_at = $('#cat_search').val('articles');
    var val_at = $(this).val();
    $('.js-value').text(val_at);
    $('.all-body').appendTo($('.dropp'));
    $('.model_body').appendTo($('.dropp'));
  });
  $(document).on('click','#models_search',function(){
    var val_at = $('#cat_search').val('model');
    $('.search-form').attr('action','/search/');
    var val_mo = $(this).val();
    $('.js-value').text(val_mo);
    $('.all-body').appendTo($('.dropp'));
    $('.articles_search').appendTo($('.dropp'));
  });
  </script>
  {include file="ru/Components/basket/basket.tpl"}

</section>

</div>
