export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      COLLECTION: {
        Row: {
          created_at: string
          Description_collection: string | null
          id: number
          Nom: string | null
        }
        Insert: {
          created_at?: string
          Description_collection?: string | null
          id?: number
          Nom?: string | null
        }
        Update: {
          created_at?: string
          Description_collection?: string | null
          id?: number
          Nom?: string | null
        }
        Relationships: []
      }
      DEMATERIALISE: {
        Row: {
          created_at: string
          DateParution: string | null
          id: number
          id_film: number | null
          NomFilmDematerialise: string | null
          Note: number | null
          QualitéVideo: string | null
          url_images: string | null
        }
        Insert: {
          created_at?: string
          DateParution?: string | null
          id?: number
          id_film?: number | null
          NomFilmDematerialise?: string | null
          Note?: number | null
          QualitéVideo?: string | null
          url_images?: string | null
        }
        Update: {
          created_at?: string
          DateParution?: string | null
          id?: number
          id_film?: number | null
          NomFilmDematerialise?: string | null
          Note?: number | null
          QualitéVideo?: string | null
          url_images?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_DEMATERIALISE_id_film_fkey"
            columns: ["id_film"]
            isOneToOne: false
            referencedRelation: "FILM"
            referencedColumns: ["id"]
          },
        ]
      }
      DematerialisePlateforme: {
        Row: {
          abonnement: boolean | null
          created_at: string
          id: number
          id_dematerialise: number | null
          id_film: number | null
          id_platforme: number | null
          prix: number | null
          url: string | null
        }
        Insert: {
          abonnement?: boolean | null
          created_at?: string
          id?: number
          id_dematerialise?: number | null
          id_film?: number | null
          id_platforme?: number | null
          prix?: number | null
          url?: string | null
        }
        Update: {
          abonnement?: boolean | null
          created_at?: string
          id?: number
          id_dematerialise?: number | null
          id_film?: number | null
          id_platforme?: number | null
          prix?: number | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_DematerialisePlateforme_id_dematerialise_fkey"
            columns: ["id_dematerialise"]
            isOneToOne: false
            referencedRelation: "DEMATERIALISE"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_DematerialisePlateforme_id_film_fkey"
            columns: ["id_film"]
            isOneToOne: false
            referencedRelation: "FILM"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_DematerialisePlateforme_id_platforme_fkey"
            columns: ["id_platforme"]
            isOneToOne: false
            referencedRelation: "PLATEFORME"
            referencedColumns: ["id"]
          },
        ]
      }
      FILM: {
        Row: {
          bg_image: string | null
          created_at: string
          DateSortie: string | null
          Durée: string | null
          id: number
          intro: string | null
          LangueOriginale: string | null
          Note: number | null
          Nouveauté: boolean | null
          Synopsis: string | null
          Titre: string | null
          url_images: string | null
        }
        Insert: {
          bg_image?: string | null
          created_at?: string
          DateSortie?: string | null
          Durée?: string | null
          id?: number
          intro?: string | null
          LangueOriginale?: string | null
          Note?: number | null
          Nouveauté?: boolean | null
          Synopsis?: string | null
          Titre?: string | null
          url_images?: string | null
        }
        Update: {
          bg_image?: string | null
          created_at?: string
          DateSortie?: string | null
          Durée?: string | null
          id?: number
          intro?: string | null
          LangueOriginale?: string | null
          Note?: number | null
          Nouveauté?: boolean | null
          Synopsis?: string | null
          Titre?: string | null
          url_images?: string | null
        }
        Relationships: []
      }
      FILM_Utilisateur: {
        Row: {
          bg_image: string | null
          created_at: string
          DateSortie: string | null
          Durée: string | null
          id: number
          id_user: string | null
          intro: string | null
          LangueOriginale: string | null
          Note: number | null
          Nouveauté: boolean | null
          Synopsis: string | null
          Titre: string | null
          url_images: string | null
        }
        Insert: {
          bg_image?: string | null
          created_at?: string
          DateSortie?: string | null
          Durée?: string | null
          id?: number
          id_user?: string | null
          intro?: string | null
          LangueOriginale?: string | null
          Note?: number | null
          Nouveauté?: boolean | null
          Synopsis?: string | null
          Titre?: string | null
          url_images?: string | null
        }
        Update: {
          bg_image?: string | null
          created_at?: string
          DateSortie?: string | null
          Durée?: string | null
          id?: number
          id_user?: string | null
          intro?: string | null
          LangueOriginale?: string | null
          Note?: number | null
          Nouveauté?: boolean | null
          Synopsis?: string | null
          Titre?: string | null
          url_images?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_FILM_Utilisateur_id_user_fkey"
            columns: ["id_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      FilmActeur: {
        Row: {
          created_at: string
          id: number
          id_acteur: number | null
          id_film: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          id_acteur?: number | null
          id_film?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          id_acteur?: number | null
          id_film?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_FilmActeur_id_acteur_fkey"
            columns: ["id_acteur"]
            isOneToOne: false
            referencedRelation: "STAR"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_FilmActeur_id_film_fkey"
            columns: ["id_film"]
            isOneToOne: false
            referencedRelation: "FILM"
            referencedColumns: ["id"]
          },
        ]
      }
      FilmCollection: {
        Row: {
          created_at: string
          id: number
          id_collection: number | null
          id_film: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          id_collection?: number | null
          id_film?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          id_collection?: number | null
          id_film?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_FilmCollection_id_collection_fkey"
            columns: ["id_collection"]
            isOneToOne: false
            referencedRelation: "COLLECTION"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_FilmCollection_id_film_fkey"
            columns: ["id_film"]
            isOneToOne: false
            referencedRelation: "FILM"
            referencedColumns: ["id"]
          },
        ]
      }
      FilmFavori: {
        Row: {
          created_at: string
          id: number
          id_film: number | null
          id_user: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          id_film?: number | null
          id_user?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          id_film?: number | null
          id_user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_FilmFavori_id_film_fkey"
            columns: ["id_film"]
            isOneToOne: false
            referencedRelation: "FILM"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_FilmFavori_id_user_fkey"
            columns: ["id_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      FilmGenre: {
        Row: {
          created_at: string
          id: number
          id_film: number | null
          id_genre: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          id_film?: number | null
          id_genre?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          id_film?: number | null
          id_genre?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_FilmGenre_id_film_fkey"
            columns: ["id_film"]
            isOneToOne: false
            referencedRelation: "FILM"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_FilmGenre_id_genre_fkey"
            columns: ["id_genre"]
            isOneToOne: false
            referencedRelation: "GENRE"
            referencedColumns: ["id"]
          },
        ]
      }
      FilmRealise: {
        Row: {
          created_at: string
          id: number
          id_film: number | null
          id_realisateur: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          id_film?: number | null
          id_realisateur?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          id_film?: number | null
          id_realisateur?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_FilmRealise_id_film_fkey"
            columns: ["id_film"]
            isOneToOne: false
            referencedRelation: "FILM"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_FilmRealise_id_realisateur_fkey"
            columns: ["id_realisateur"]
            isOneToOne: false
            referencedRelation: "STAR"
            referencedColumns: ["id"]
          },
        ]
      }
      FilmScenarise: {
        Row: {
          created_at: string
          id: number
          id_film: number | null
          id_scenariste: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          id_film?: number | null
          id_scenariste?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          id_film?: number | null
          id_scenariste?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_FilmScenarise_id_film_fkey"
            columns: ["id_film"]
            isOneToOne: false
            referencedRelation: "FILM"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_FilmScenarise_id_scenariste_fkey"
            columns: ["id_scenariste"]
            isOneToOne: false
            referencedRelation: "STAR"
            referencedColumns: ["id"]
          },
        ]
      }
      GENRE: {
        Row: {
          created_at: string
          Description_genre: string | null
          id: number
          Nom: string | null
        }
        Insert: {
          created_at?: string
          Description_genre?: string | null
          id?: number
          Nom?: string | null
        }
        Update: {
          created_at?: string
          Description_genre?: string | null
          id?: number
          Nom?: string | null
        }
        Relationships: []
      }
      InfoUsers: {
        Row: {
          created_at: string
          id: number
          Id_user: string | null
          ImagUser: string | null
          Pseudo: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          Id_user?: string | null
          ImagUser?: string | null
          Pseudo?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          Id_user?: string | null
          ImagUser?: string | null
          Pseudo?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_InfoUsers_Id_user_fkey"
            columns: ["Id_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      PHYSIQUE: {
        Row: {
          AspectRatio: string | null
          codec: string | null
          created_at: string
          Doublage: string | null
          id: number
          id_film: number | null
          NomPhysique: string | null
          PistesAudios: string | null
          Resolution: string | null
          SousTitre: string | null
          Type: string | null
          url: string | null
          url_images: string | null
        }
        Insert: {
          AspectRatio?: string | null
          codec?: string | null
          created_at?: string
          Doublage?: string | null
          id?: number
          id_film?: number | null
          NomPhysique?: string | null
          PistesAudios?: string | null
          Resolution?: string | null
          SousTitre?: string | null
          Type?: string | null
          url?: string | null
          url_images?: string | null
        }
        Update: {
          AspectRatio?: string | null
          codec?: string | null
          created_at?: string
          Doublage?: string | null
          id?: number
          id_film?: number | null
          NomPhysique?: string | null
          PistesAudios?: string | null
          Resolution?: string | null
          SousTitre?: string | null
          Type?: string | null
          url?: string | null
          url_images?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_PHYSIQUE_id_film_fkey"
            columns: ["id_film"]
            isOneToOne: false
            referencedRelation: "FILM"
            referencedColumns: ["id"]
          },
        ]
      }
      PLATEFORME: {
        Row: {
          created_at: string
          Details: string | null
          id: number
          ImagePlatforme: string | null
          NomPlateforme: string | null
        }
        Insert: {
          created_at?: string
          Details?: string | null
          id?: number
          ImagePlatforme?: string | null
          NomPlateforme?: string | null
        }
        Update: {
          created_at?: string
          Details?: string | null
          id?: number
          ImagePlatforme?: string | null
          NomPlateforme?: string | null
        }
        Relationships: []
      }
      STAR: {
        Row: {
          Age: number | null
          created_at: string
          DateNaissance: string | null
          id: number
          Nom: string | null
          Nomination: string | null
          Prenom: string | null
          Sexe: string | null
          url_images: string | null
        }
        Insert: {
          Age?: number | null
          created_at?: string
          DateNaissance?: string | null
          id?: number
          Nom?: string | null
          Nomination?: string | null
          Prenom?: string | null
          Sexe?: string | null
          url_images?: string | null
        }
        Update: {
          Age?: number | null
          created_at?: string
          DateNaissance?: string | null
          id?: number
          Nom?: string | null
          Nomination?: string | null
          Prenom?: string | null
          Sexe?: string | null
          url_images?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
