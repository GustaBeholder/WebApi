using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CrudBK.Models
{

    [Table("Produto")]
    public class Produto
    {
        [Column("Id")]
        [Display(Name ="cód")]
        public int Id { get; set; }

        [Column("Nome")]
        [Display(Name = "Nome")]
        public string Nome { get; set; }

        [Column("Descricao")]
        [Display(Name = "Descrição")]
        public string Descricao { get; set; }

        [Column("Peso")]
        [Display(Name = "Peso")]
        public string Peso { get; set; }

        [Column("Preco")]
        [Display(Name = "Preço")]
        public string Preco { get; set; }
    }
}
