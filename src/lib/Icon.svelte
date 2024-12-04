<script>
    export let id;
    export let className ="";
    export let width;
    export let height;
 </script>
 
 <style>
     /* your styles go here */
 </style>
 
 <svg class={className} width={width} height={height}>
     <use href={`/icons.svg#${id}`} xlink:href={`/icons.svg#${id}`} />
 </svg>
 