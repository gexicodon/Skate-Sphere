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
     <use href={`src/img/icons.svg#${id}`} xlink:href={`src/img/icons.svg#${id}`} />
 </svg>
 